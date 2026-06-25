(() => {
  'use strict';

  const stage = document.querySelector('.hero-art');
  if (!stage) return;

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

  const configuredProduct = document.documentElement.dataset.heroProduct;
  if (!configuredProduct) return;

  const image = new Image();
  image.className = 'hero-product-image';
  image.alt = 'Produto La Música em destaque';
  image.decoding = 'async';
  image.fetchPriority = 'high';
  image.addEventListener('load', () => {
    stage.prepend(image);
    stage.classList.add('has-product-image');
  }, { once: true });
  image.src = configuredProduct;
})();
