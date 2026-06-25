(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  const stage = document.querySelector('.hero-art');
  if (!hero || !stage) return;

  const OFFICIAL_PRODUCT = 'https://www.gonzalezreeds.com.au/web/image/2575-1cb61823/RC%20Main.png';

  if (!hero.querySelector('.hero-obelisk-accent')) {
    hero.insertAdjacentHTML('afterbegin', '<div class="hero-obelisk-accent" aria-hidden="true"></div>');
  }

  stage.className = 'hero-art hero-product-stage';
  stage.setAttribute('data-hero-product', '');
  stage.setAttribute('aria-label', 'Produto em destaque da La Música');

  stage.innerHTML = `
    <div class="hero-product-shell" aria-hidden="true">
      <div class="hero-product-side"><span>LA MÚSICA</span></div>
      <div class="hero-product-face">
        <div class="hero-product-logo"><span class="hero-product-logo-mark">///</span><span>LA MÚSICA</span></div>
        <div class="hero-product-reed"></div>
        <strong class="hero-product-title">REEDS</strong>
        <small class="hero-product-tagline">Precisão em cada nota</small>
        <small class="hero-product-meta">Importado e distribuído oficialmente<br>no Brasil</small>
      </div>
    </div>`;

  const configuredProduct = document.documentElement.dataset.heroProduct || OFFICIAL_PRODUCT;
  if (!configuredProduct) return;

  const image = new Image();
  image.className = 'hero-product-image';
  image.alt = 'Caixa de palhetas Gonzalez distribuída pela La Música';
  image.decoding = 'async';
  image.fetchPriority = 'high';
  image.referrerPolicy = 'no-referrer';
  image.addEventListener('load', () => {
    stage.prepend(image);
    stage.classList.add('has-product-image');
  }, { once: true });
  image.addEventListener('error', () => {
    stage.classList.add('product-image-failed');
  }, { once: true });
  image.src = configuredProduct;
})();
