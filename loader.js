(() => {
  'use strict';

  const status = document.querySelector('[data-loader-status]');
  const indexParts = ['00', '01', '02', '03', '04'].map((part) => `src/index/${part}.html`);
  const styleParts = ['00', '01', '02', '03', '04', '05', '06', '07', '08'].map((part) => `src/styles/${part}.css`);
  const scriptParts = ['00', '01', '02', '04'].map((part) => `src/scripts/${part}.js`);

  const fetchText = async (path) => {
    const response = await fetch(path, { cache: 'no-cache', credentials: 'same-origin' });
    if (!response.ok) throw new Error(`Falha ao carregar ${path}: HTTP ${response.status}`);
    return response.text();
  };

  const joinParts = async (paths) => (await Promise.all(paths.map(fetchText))).join('');

  const sha256 = async (text) => {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    const bytes = new Uint8Array(digest);
    let binary = '';
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary);
  };

  const render = async () => {
    const [htmlSource, cssSource, scriptSource] = await Promise.all([
      joinParts(indexParts),
      joinParts(styleParts),
      joinParts(scriptParts)
    ]);

    const safeCss = cssSource.replace(/<\/style/gi, '<\\/style');
    const safeScript = scriptSource.replace(/<\/script/gi, '<\\/script');
    const [styleHash, scriptHash] = await Promise.all([sha256(safeCss), sha256(safeScript)]);
    const policy = [
      "default-src 'self'",
      "img-src 'self' data: https://lamusica.com.br",
      `style-src 'self' 'sha256-${styleHash}'`,
      `script-src 'self' 'sha256-${scriptHash}'`,
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'none'",
      "form-action 'self'",
      'upgrade-insecure-requests'
    ].join('; ');

    let page = htmlSource.replace(
      /<meta content="[^"]*" http-equiv="Content-Security-Policy"\/>/i,
      `<meta content="${policy}" http-equiv="Content-Security-Policy"/>`
    );
    page = page.replace('<link href="styles.css" rel="stylesheet"/>', `<style>${safeCss}</style>`);
    page = page.replace('<script defer="" src="script.js"></script>', `<script>${safeScript}</script>`);

    document.open();
    document.write(page);
    document.close();
  };

  render().catch((error) => {
    console.error(error);
    if (status) {
      status.classList.add('error');
      status.innerHTML = 'Não foi possível carregar o site. <a href="https://wa.me/5519999251030">Fale com a La Música pelo WhatsApp.</a>';
    }
  });
})();
