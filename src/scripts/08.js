(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  const stage = document.querySelector('.hero-art');
  if (!hero || !stage) return;

  const version = '20260625-static1';
  const readAsset = async (directory) => {
    const files = [0, 1, 2, 3].map((number) =>
      `${directory}/part-${String(number).padStart(2, '0')}.b64?v=${version}`
    );
    const responses = await Promise.all(files.map((file) => fetch(file, { cache: 'reload' })));
    if (responses.some((response) => !response.ok)) throw new Error('Asset indisponível');
    const parts = await Promise.all(responses.map((response) => response.text()));
    return parts.join('').replace(/\s+/g, '');
  };

  stage.className = 'hero-art hero-product-stage';
  stage.setAttribute('aria-label', 'Produto em destaque da La Música');
  stage.replaceChildren();

  readAsset('src/assets-source/hero-background-v2')
    .then((value) => {
      hero.style.setProperty('--hero-background-image', `url("data:image/webp;base64,${value}")`);
      hero.classList.add('hero-background-ready');
    })
    .catch((error) => console.error('Falha no background do hero.', error));

  const configuredProduct = document.documentElement.dataset.heroProduct;
  const productSource = configuredProduct
    ? Promise.resolve(configuredProduct)
    : readAsset('src/assets-source/hero-product').then((value) => `data:image/webp;base64,${value}`);

  productSource.then((source) => {
    const image = new Image();
    image.className = 'hero-product-image';
    image.alt = 'Caixa de palhetas La Música em destaque';
    image.decoding = 'async';
    image.fetchPriority = 'high';
    image.addEventListener('load', () => {
      stage.append(image);
      stage.classList.add('has-product-image');
    }, { once: true });
    image.src = source;
  }).catch((error) => console.error('Falha no produto do hero.', error));
})();
