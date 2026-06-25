(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  if (!hero) return;

  const resetParallax = () => {
    hero.style.setProperty('--hero-parallax-x', '0px');
    hero.style.setProperty('--hero-parallax-y', '0px');
    hero.style.setProperty('--hero-product-x', '0px');
    hero.style.setProperty('--hero-product-y', '0px');
  };

  const updateParallax = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    // O cenário se move lentamente; o produto reage em direção oposta.
    // As duas camadas permanecem independentes para permitir a troca da caixa.
    hero.style.setProperty('--hero-parallax-x', `${x * 11}px`);
    hero.style.setProperty('--hero-parallax-y', `${y * 6}px`);
    hero.style.setProperty('--hero-product-x', `${x * -10}px`);
    hero.style.setProperty('--hero-product-y', `${y * -6}px`);
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    resetParallax();
    return;
  }

  hero.addEventListener('pointermove', updateParallax, { passive: true });
  hero.addEventListener('pointerleave', resetParallax, { passive: true });
})();
