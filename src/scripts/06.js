(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.hero-cultural-bg')) return;

  hero.insertAdjacentHTML('afterbegin', `
    <div aria-hidden="true" class="hero-cultural-bg">
      <svg preserveAspectRatio="xMidYMid slice" role="presentation" viewBox="0 0 1600 900">
        <defs>
          <linearGradient id="heroMountainLine" x1="0" x2="1">
            <stop offset="0" stop-color="#71d8f4" stop-opacity=".08"></stop>
            <stop offset=".55" stop-color="#dbefff" stop-opacity=".28"></stop>
            <stop offset="1" stop-color="#71d8f4" stop-opacity=".06"></stop>
          </linearGradient>
          <linearGradient id="heroPavementLine" x1="0" x2="1">
            <stop offset="0" stop-color="#8edff5" stop-opacity=".08"></stop>
            <stop offset=".55" stop-color="#ffffff" stop-opacity=".28"></stop>
            <stop offset="1" stop-color="#8edff5" stop-opacity=".09"></stop>
          </linearGradient>
          <radialGradient id="heroCorcovadoGlow">
            <stop offset="0" stop-color="#71d8f4" stop-opacity=".18"></stop>
            <stop offset="1" stop-color="#71d8f4" stop-opacity="0"></stop>
          </radialGradient>
        </defs>

        <circle class="hero-corcovado-glow" cx="1080" cy="370" r="330"></circle>

        <g class="hero-andes">
          <path d="M250 510L380 382L438 430L545 286L635 410L722 318L810 430L935 244L1042 382L1176 218L1296 362L1415 276L1580 455"></path>
          <path d="M220 548L360 452L438 500L560 360L660 486L758 402L850 488L955 342L1050 448L1180 312L1308 436L1428 356L1590 500"></path>
          <path d="M330 516L545 286M560 360L635 410M935 244L1042 382M1176 218L1296 362M1415 276L1580 455"></path>
        </g>

        <g class="hero-corcovado">
          <path class="hero-corcovado-hill" d="M760 632C830 560 870 490 914 430C956 372 1006 342 1062 326C1116 311 1171 326 1214 368C1257 410 1282 482 1325 535C1362 579 1412 608 1480 632Z"></path>
          <path class="hero-corcovado-ridge" d="M820 628C886 566 916 508 956 458C996 408 1040 383 1083 374C1131 365 1176 378 1211 414C1248 451 1270 510 1314 558C1340 586 1371 608 1416 628"></path>
          <g class="hero-christ" transform="translate(1065 246)">
            <circle cx="0" cy="0" r="12"></circle>
            <path d="M-10 15H10L18 82H-18Z"></path>
            <path d="M-70 29H70"></path>
            <path d="M-70 29L-104 44M70 29L104 44"></path>
            <path d="M-17 82L-28 118M17 82L28 118"></path>
          </g>
        </g>

        <g class="hero-obelisk" transform="translate(76 445)">
          <path d="M0 264H112L98 288H14Z"></path>
          <path d="M39 22H73L93 264H19Z"></path>
          <path d="M56-10L73 22H39Z"></path>
          <path d="M56 22V264"></path>
        </g>

        <g class="hero-copacabana">
          <path d="M-40 705C80 630 200 630 320 705S560 780 680 705S920 630 1040 705S1280 780 1400 705S1640 630 1760 705"></path>
          <path d="M-40 746C80 671 200 671 320 746S560 821 680 746S920 671 1040 746S1280 821 1400 746S1640 671 1760 746"></path>
          <path d="M-40 787C80 712 200 712 320 787S560 862 680 787S920 712 1040 787S1280 862 1400 787S1640 712 1760 787"></path>
          <path d="M-40 828C80 753 200 753 320 828S560 903 680 828S920 753 1040 828S1280 903 1400 828S1640 753 1760 828"></path>
          <path d="M-40 869C80 794 200 794 320 869S560 944 680 869S920 794 1040 869S1280 944 1400 869S1640 794 1760 869"></path>
        </g>

        <g class="hero-music-lines">
          <path d="M910 540C1010 482 1110 482 1210 540C1310 598 1410 598 1510 540"></path>
          <path d="M930 566C1030 508 1130 508 1230 566C1330 624 1430 624 1530 566"></path>
        </g>
      </svg>
    </div>`);
})();
