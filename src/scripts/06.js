(() => {
  'use strict';

  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.hero-cultural-bg')) return;

  hero.insertAdjacentHTML('afterbegin', `
    <div aria-hidden="true" class="hero-cultural-bg">
      <svg preserveAspectRatio="xMidYMid slice" role="presentation" viewBox="0 0 1600 900">
        <defs>
          <linearGradient id="heroCultureLine" x1="0" x2="1">
            <stop offset="0" stop-color="#71d8f4" stop-opacity="0"></stop>
            <stop offset=".5" stop-color="#71d8f4" stop-opacity=".82"></stop>
            <stop offset="1" stop-color="#21b8e6" stop-opacity="0"></stop>
          </linearGradient>
          <radialGradient id="heroCultureGlow">
            <stop offset="0" stop-color="#71d8f4" stop-opacity=".22"></stop>
            <stop offset="1" stop-color="#71d8f4" stop-opacity="0"></stop>
          </radialGradient>
        </defs>

        <circle class="hero-culture-glow" cx="800" cy="390" r="390"></circle>

        <g class="hero-culture-layer hero-culture-argentina">
          <path class="hero-monument-fill" d="M138 694h222l-24 45H160z"></path>
          <path class="hero-monument-fill" d="M218 344h61l47 350H171z"></path>
          <path class="hero-monument-fill" d="M248 287l31 57h-61z"></path>
          <path class="hero-skyline" d="M35 740h390M60 666h78v74M158 620h88v120M272 650h62v90M356 598h42v142"></path>
          <path class="hero-country-ghost" d="M55 120l57 63-11 87 38 70-18 101 46 95-32 142-59-43-19-126-53-108 16-119-36-74z"></path>
        </g>

        <g class="hero-culture-layer hero-culture-brazil">
          <circle class="hero-monument-fill" cx="1360" cy="338" r="29"></circle>
          <path class="hero-monument-fill" d="M1348 370h24l32 222h-88z"></path>
          <path class="hero-monument-fill" d="M1198 412h324v24h-324z"></path>
          <path class="hero-monument-fill" d="M1317 592h86l43 56h-172z"></path>
          <path class="hero-skyline" d="M1168 740h390M1190 664h68v76M1283 622h76v118M1400 652h61v88M1490 604h39v136"></path>
          <path class="hero-country-ghost" d="M1310 96l91 29 74 71 63 4 52 64-26 69 35 50-43 51-18 91-80 40-42-73-70-35-35-71-48-35 30-74-23-68 48-32z"></path>
        </g>

        <g class="hero-culture-layer hero-culture-music">
          <path class="hero-music-wave hero-music-wave-one" d="M120 245C360 72 560 405 810 214C1050 30 1280 300 1530 142"></path>
          <path class="hero-music-wave hero-music-wave-two" d="M55 660C320 502 570 790 820 605C1085 409 1295 701 1565 520"></path>
          <path class="hero-staff" d="M415 350c145-68 290-68 435 0M415 376c145-68 290-68 435 0M415 402c145-68 290-68 435 0M415 428c145-68 290-68 435 0M415 454c145-68 290-68 435 0"></path>

          <g class="hero-note hero-note-one" transform="translate(560 310)">
            <circle cx="0" cy="72" r="18"></circle><path d="M16 72V0h18"></path>
          </g>
          <g class="hero-note hero-note-two" transform="translate(790 438)">
            <circle cx="0" cy="72" r="17"></circle><path d="M15 72V0h18"></path>
          </g>
          <g class="hero-note hero-note-three" transform="translate(1010 270)">
            <circle cx="0" cy="72" r="14"></circle><path d="M13 72V10h17"></path>
          </g>

          <g class="hero-bandoneon" transform="translate(690 610)">
            <path d="M0 34l64-34 64 34-64 34z"></path>
            <path d="M128 34l64-34 64 34-64 34z"></path>
            <path d="M64 0h128M64 68h128M92 7v54M119 4v60M146 4v60M173 7v54"></path>
          </g>

          <path class="hero-sax-line" d="M1055 470c-39 30-55 74-31 109c26 38 82 29 104-4c17-26 8-55-16-68c-20-11-44-5-55 12c-9 14-5 32 8 39c12 7 28 3 35-8M1055 470l-28-72M1027 398l35-16"></path>
        </g>
      </svg>

      <div class="hero-rhythm-label hero-rhythm-jazz">Jazz</div>
      <div class="hero-rhythm-label hero-rhythm-bolero">Bolero</div>
      <div class="hero-rhythm-label hero-rhythm-tango">Tango</div>
    </div>`);
})();
