(() => {
  'use strict';

  const story = document.querySelector('#historia');
  if (!story || story.querySelector('.ambient-corcovado')) return;

  let ambient = story.querySelector('.story-ambient');

  if (!ambient) {
    story.classList.remove('story-origin-runtime');
    story.insertAdjacentHTML('afterbegin', `
      <div aria-hidden="true" class="story-ambient">
        <svg preserveAspectRatio="xMidYMid slice" role="presentation" viewBox="0 0 1600 900">
          <defs>
            <linearGradient id="ambientSkyRuntime" x1="0" x2="1">
              <stop offset="0" stop-color="#8ed7f5"></stop>
              <stop offset="1" stop-color="#dff5ff"></stop>
            </linearGradient>
          </defs>
          <rect class="ambient-wash" height="900" width="1600" fill="url(#ambientSkyRuntime)"></rect>
          <g class="ambient-layer ambient-layer-argentina">
            <path class="ambient-country" d="M116 125l45 47-9 67 31 52-14 79 37 73-25 112-47-34-15-98-42-83 13-91-29-57z"></path>
            <g class="ambient-obelisk" transform="translate(250 355)"><path d="M0 130h105l-13 24H13z"></path><path d="M39 2h27l19 128H20z"></path><path d="M52-23l14 25H39z"></path></g>
          </g>
          <g class="ambient-layer ambient-layer-brazil">
            <path class="ambient-country" d="M1232 104l83 25 66 65 57 3 48 58-24 62 31 45-38 45-16 83-72 36-38-66-63-31-32-65-43-32 27-67-21-61 43-29z"></path>
            <g class="ambient-corcovado" transform="translate(1015 415)">
              <path d="M0 194C54 134 88 90 138 72C191 53 232 60 280 28C333 0 394 9 444 52C486 88 522 137 568 176"></path>
              <path d="M0 194H568"></path>
              <path d="M116 194C152 150 187 124 222 112C260 99 297 101 334 84C375 66 417 67 454 88C488 107 518 139 548 176"></path>
            </g>
          </g>
          <g class="ambient-layer ambient-layer-music">
            <path class="ambient-wave" d="M190 275C430 112 640 420 875 230C1090 58 1290 300 1500 170"></path>
            <path class="ambient-wave ambient-wave-second" d="M85 670C360 520 575 790 825 615C1075 438 1275 690 1535 535"></path>
            <path class="ambient-staff" d="M370 380c160-80 320-80 480 0M370 403c160-80 320-80 480 0M370 426c160-80 320-80 480 0M370 449c160-80 320-80 480 0M370 472c160-80 320-80 480 0"></path>
          </g>
        </svg>
      </div>`);
    return;
  }

  const brazil = ambient.querySelector('.ambient-layer-brazil');
  if (!brazil) return;

  const cristo = brazil.querySelector('.ambient-cristo');
  if (cristo) cristo.remove();

  brazil.insertAdjacentHTML('beforeend', `
    <g class="ambient-corcovado" transform="translate(1015 415)">
      <path d="M0 194C54 134 88 90 138 72C191 53 232 60 280 28C333 0 394 9 444 52C486 88 522 137 568 176"></path>
      <path d="M0 194H568"></path>
      <path d="M116 194C152 150 187 124 222 112C260 99 297 101 334 84C375 66 417 67 454 88C488 107 518 139 548 176"></path>
    </g>`);
})();
