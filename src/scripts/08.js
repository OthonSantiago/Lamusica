(() => {
  'use strict';

  const stage = document.querySelector('.hero-art');
  if (!stage) return;

  const DEFAULT_PRODUCT = '__HERO_PRODUCT_DATA__';
  const configuredProduct = document.documentElement.dataset.heroProduct;
  const productSource = configuredProduct || DEFAULT_PRODUCT;

  stage.className = 'hero-art hero-product-stage';
  stage.setAttribute('aria-label', 'Produto em destaque da La Música');
  stage.replaceChildren();

  const image = new Image();
  image.className = 'hero-product-image';
  image.alt = 'Caixa de palhetas La Música em destaque';
  image.decoding = 'async';
  image.fetchPriority = 'high';
  image.addEventListener('load', () => {
    stage.append(image);
    stage.classList.add('has-product-image');
  }, { once: true });
  image.addEventListener('error', () => {
    stage.classList.add('product-image-failed');
  }, { once: true });
  image.src = productSource;
})();
