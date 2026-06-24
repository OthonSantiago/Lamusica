(() => {
  'use strict';

  const section = document.querySelector('#historia');
  if (!section || section.querySelector('.story-ambient')) return;

  section.classList.add('story-origin', 'story-origin-runtime');
  section.innerHTML = `
    <div class="container story-grid">
      <div aria-hidden="true" class="story-visual reveal visible">
        <div class="story-year">2019</div>
        <div class="story-stamp">ARGENTINA <span>×</span> BRASIL</div>
        <div class="story-lines"></div>
        <div class="story-reeds"><i></i><i></i><i></i></div>
        <div class="story-visual-caption">
          <strong>Uma história que atravessou fronteiras.</strong>
          <small>Palhetas, amizade e a conexão entre dois países.</small>
        </div>
      </div>
      <div class="story-copy reveal visible">
        <span class="eyebrow dark">Nossa história</span>
        <h2>Uma conexão com a música que atravessou fronteiras.</h2>
        <p>A La Música iniciou em 2019, quando Robson Gastão conheceu a marca argentina Gonzalez Reeds. Na época, ele morava na Argentina e levava palhetas para os amigos sempre que visitava o Brasil.</p>
        <p>Com o aumento dos pedidos, visitou a fábrica e recebeu o convite para representar a marca no Brasil. Assim nasceu a La Música e começaram as primeiras importações.</p>
        <p>O nome em espanhol homenageia essa ligação. As cores do logotipo são inspiradas na bandeira argentina e o pictograma representa a letra “M” como uma mão formando um acorde.</p>
        <p>Depois vieram Vientos Bambu, BG France e Légère Reeds, ampliando a distribuição de acessórios especializados para instrumentos de sopro.</p>
        <div class="story-signature">Robson Gastão <small>Fundador, La Música</small></div>
      </div>
    </div>`;
})();
