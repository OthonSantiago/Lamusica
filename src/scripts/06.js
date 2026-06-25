(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.hero-cultural-bg')) return;

  hero.insertAdjacentHTML('afterbegin', `
    <div aria-hidden="true" class="hero-cultural-bg">
      <svg preserveAspectRatio="xMidYMid slice" role="presentation" viewBox="0 0 1600 900">
        <defs>
          <linearGradient id="heroMountainLine" x1="0" x2="1">
            <stop offset="0" stop-color="#71d8f4" stop-opacity=".18"></stop>
            <stop offset=".52" stop-color="#f6ddbd" stop-opacity=".58"></stop>
            <stop offset="1" stop-color="#71d8f4" stop-opacity=".16"></stop>
          </linearGradient>
          <linearGradient id="heroPavementLine" x1="0" x2="1">
            <stop offset="0" stop-color="#8edff5" stop-opacity=".22"></stop>
            <stop offset=".55" stop-color="#ffffff" stop-opacity=".62"></stop>
            <stop offset="1" stop-color="#8edff5" stop-opacity=".18"></stop>
          </linearGradient>
          <radialGradient id="heroSugarloafGlow">
            <stop offset="0" stop-color="#f3bf77" stop-opacity=".25"></stop>
            <stop offset="1" stop-color="#71d8f4" stop-opacity="0"></stop>
          </radialGradient>
        </defs>

        <circle class="hero-sugarloaf-glow" cx="1250" cy="380" r="360"></circle>

        <g class="hero-andes">
          <path d="M180 520L310 398L384 448L492 300L584 418L690 324L785 448L905 266L1010 396L1128 234L1250 372L1378 286L1560 468"></path>
          <path d="M150 560L300 470L394 520L514 382L626 500L736 414L834 508L932 370L1048 466L1172 338L1308 454L1438 374L1590 518"></path>
          <path d="M285 515L492 300M514 382L584 418M905 266L1010 396M1128 234L1250 372M1378 286L1560 468"></path>
        </g>

        <g class="hero-sugarloaf">
          <path class="hero-sugarloaf-main" d="M1030 630C1088 560 1115 490 1140 410C1164 334 1198 285 1240 270C1286 253 1321 286 1344 358C1365 424 1388 514 1448 586C1468 610 1490 624 1518 630Z"></path>
          <path class="hero-sugarloaf-second" d="M1275 632C1316 598 1338 558 1358 512C1378 466 1406 438 1442 430C1484 420 1518 443 1544 488C1564 523 1579 570 1600 604V632Z"></path>
          <path class="hero-cable" d="M1262 304C1355 349 1448 400 1544 488"></path>
          <circle class="hero-cable-car" cx="1437" cy="394" r="8"></circle>
        </g>

        <g class="hero-obelisk" transform="translate(78 468)">
          <path d="M0 230H92L80 250H12Z"></path>
          <path d="M31 18H61L78 230H14Z"></path>
          <path d="M46-8L61 18H31Z"></path>
          <path d="M46 18V230"></path>
        </g>

        <g class="hero-copacabana">
          <path d="M-60 700C70 625 200 625 330 700S590 775 720 700S980 625 1110 700S1370 775 1500 700S1760 625 1890 700"></path>
          <path d="M-60 744C70 669 200 669 330 744S590 819 720 744S980 669 1110 744S1370 819 1500 744S1760 669 1890 744"></path>
          <path d="M-60 788C70 713 200 713 330 788S590 863 720 788S980 713 1110 788S1370 863 1500 788S1760 713 1890 788"></path>
          <path d="M-60 832C70 757 200 757 330 832S590 907 720 832S980 757 1110 832S1370 907 1500 832S1760 757 1890 832"></path>
        </g>

        <g class="hero-music-lines">
          <path d="M820 168C980 94 1140 94 1300 168C1410 219 1510 226 1610 190"></path>
          <path d="M842 194C1002 120 1162 120 1322 194C1432 245 1532 252 1632 216"></path>
          <path d="M864 220C1024 146 1184 146 1344 220C1454 271 1554 278 1654 242"></path>
        </g>
      </svg>
    </div>`);

  const updateParallax = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    hero.style.setProperty('--hero-parallax-x', `${x * 14}px`);
    hero.style.setProperty('--hero-parallax-y', `${y * 8}px`);
    hero.style.setProperty('--hero-product-x', `${x * -8}px`);
    hero.style.setProperty('--hero-product-y', `${y * -5}px`);
  };

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hero.addEventListener('pointermove', updateParallax, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--hero-parallax-x', '0px');
      hero.style.setProperty('--hero-parallax-y', '0px');
      hero.style.setProperty('--hero-product-x', '0px');
      hero.style.setProperty('--hero-product-y', '0px');
    }, { passive: true });
  }
})();
