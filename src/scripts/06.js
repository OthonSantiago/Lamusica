(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  if (!hero) return;

  const updateParallax = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    hero.style.setProperty('--hero-scene-x', `${x * 4}px`);
    hero.style.setProperty('--hero-scene-y', `${y * 2}px`);
    hero.style.setProperty('--hero-product-x', `${x * -8}px`);
    hero.style.setProperty('--hero-product-y', `${y * -5}px`);
  };

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hero.addEventListener('pointermove', updateParallax, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--hero-scene-x', '0px');
      hero.style.setProperty('--hero-scene-y', '0px');
      hero.style.setProperty('--hero-product-x', '0px');
      hero.style.setProperty('--hero-product-y', '0px');
    }, { passive: true });
  }
})();
