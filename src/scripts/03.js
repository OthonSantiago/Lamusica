(() => {
  'use strict';

  const section = document.querySelector('#representantes');
  if (!section) return;

  const stateNames = {
    AC:'Acre',AL:'Alagoas',AP:'Amapá',AM:'Amazonas',BA:'Bahia',CE:'Ceará',DF:'Distrito Federal',ES:'Espírito Santo',GO:'Goiás',MA:'Maranhão',MT:'Mato Grosso',MS:'Mato Grosso do Sul',MG:'Minas Gerais',PA:'Pará',PB:'Paraíba',PR:'Paraná',PE:'Pernambuco',PI:'Piauí',RJ:'Rio de Janeiro',RN:'Rio Grande do Norte',RS:'Rio Grande do Sul',RO:'Rondônia',RR:'Roraima',SC:'Santa Catarina',SP:'São Paulo',SE:'Sergipe',TO:'Tocantins'
  };

  const representatives = {
    AL:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},
    CE:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},
    PB:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},
    PE:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},
    RN:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},
    BA:{name:'Gilvan Marques',coverage:'Bahia e Sergipe'},
    SE:{name:'Gilvan Marques',coverage:'Bahia e Sergipe'},
    DF:{name:'Antonio Lopes',coverage:'Distrito Federal, Goiás e Tocantins'},
    GO:{name:'Antonio Lopes',coverage:'Distrito Federal, Goiás e Tocantins'},
    TO:{name:'Antonio Lopes',coverage:'Distrito Federal, Goiás e Tocantins'},
    MA:{name:'Marivalda Aquino',coverage:'Maranhão, Pará e Piauí'},
    PA:{name:'Marivalda Aquino',coverage:'Maranhão, Pará e Piauí'},
    PI:{name:'Marivalda Aquino',coverage:'Maranhão, Pará e Piauí'},
    MT:{name:'Antonio Espinosa',coverage:'Mato Grosso e Mato Grosso do Sul'},
    MS:{name:'Antonio Espinosa',coverage:'Mato Grosso e Mato Grosso do Sul'},
    PR:{name:'João Carlos',coverage:'Paraná'},
    RJ:{name:'Chicão Mendes',coverage:'Rio de Janeiro'},
    SP:{name:'Marcelo Silva',coverage:'São Paulo'}
  };

  const national = {name:'Equipe La Música',coverage:'Atendimento nacional e encaminhamento para o canal disponível'};
  const stateOptions = Object.entries(stateNames)
    .sort((a,b) => a[1].localeCompare(b[1], 'pt-BR'))
    .map(([code,name]) => `<option value="${code}"${code === 'SP' ? ' selected' : ''}>${name}</option>`)
    .join('');

  section.classList.add('lead-routing-enabled');
  section.innerHTML = `
    <div class="container">
      <div class="section-heading reveal visible">
        <div><span class="eyebrow dark">Cobertura comercial</span><h2>Escolha seu estado e solicite atendimento.</h2></div>
        <p>O mapa conecta cada interessado à La Música. O lead é qualificado pelo atendimento central e encaminhado ao representante responsável pela região.</p>
      </div>
      <div class="lead-routing-layout">
        <div class="lead-routing-map reveal visible">
          <div class="lead-map-toolbar">
            <button class="lead-map-reset" data-map-reset type="button">Ver Brasil inteiro</button>
            <span data-map-caption>Selecione um estado no mapa</span>
          </div>
          <div class="lead-map-stage" data-map-stage><div class="lead-map-loading">Carregando mapa do Brasil…</div></div>
          <div class="lead-map-legend"><span><i></i> Estado com representante regional</span><small>Todos os estados geram atendimento</small></div>
          <p class="lead-map-help">Clique em um estado para ampliar a região e abrir a ficha de atendimento correspondente.</p>
          <p class="map-source-note">Geometria do mapa: <a href="https://github.com/LuizJarduli/brazil-map" rel="noopener noreferrer" target="_blank">brazil-map</a>, licença BSD-2-Clause.</p>
        </div>
        <div class="lead-capture-panel reveal visible">
          <div class="lead-state-selector"><label for="lead-state-select">Estado de interesse</label><select id="lead-state-select" data-lead-state-select>${stateOptions}</select></div>
          <div class="lead-regional-card">
            <span class="rep-state" data-lead-rep-state>São Paulo · SP</span>
            <small>Responsável regional</small>
            <h3 data-lead-rep-name>Marcelo Silva</h3>
            <p data-lead-rep-coverage>Cobertura: São Paulo.</p>
            <div class="lead-routing-flow"><strong>La Música</strong><span>→</span><strong>Representante</strong><span>→</span><strong>Interessado</strong></div>
            <p class="lead-routing-privacy">O contato direto permanece protegido. A La Música recebe, qualifica e encaminha a solicitação ao responsável regional.</p>
          </div>
          <form class="regional-lead-form" data-regional-lead-form>
            <input data-lead-state name="estado" type="hidden" value="SP"/>
            <input data-lead-representative name="representante" type="hidden" value="Marcelo Silva"/>
            <div class="lead-form-heading"><span>Solicitar contato</span><strong>Gere seu atendimento regional</strong></div>
            <div class="field-row">
              <label>Nome<input autocomplete="name" maxlength="80" name="nome" required type="text"/></label>
              <label>WhatsApp<input autocomplete="tel" inputmode="tel" maxlength="24" name="whatsapp" placeholder="(DDD) número" required type="tel"/></label>
            </div>
            <label>Cidade<input autocomplete="address-level2" maxlength="80" name="cidade" required type="text"/></label>
            <label>Seu perfil<select name="perfil" required><option value="">Selecione</option><option>Músico / estudante</option><option>Professor</option><option>Lojista / revendedor</option><option>Orquestra / instituição</option><option>Interesse em representação comercial</option></select></label>
            <label>Instrumento ou categoria<input maxlength="100" name="instrumento" placeholder="Ex.: saxofone alto, clarinete, acessórios" type="text"/></label>
            <label>Interesse principal<select name="interesse" required><option value="">Selecione</option><option>Encontrar produto para uso próprio</option><option>Comprar para uma instituição</option><option>Revender produtos La Música</option><option>Representar comercialmente a La Música</option><option>Suporte e orientação técnica</option></select></label>
            <label>Mensagem<textarea maxlength="600" name="mensagem" placeholder="Conte o que você procura para direcionarmos melhor o atendimento." rows="3"></textarea></label>
            <label class="lead-consent"><input name="consentimento" required type="checkbox"/><span>Autorizo a La Música a usar estes dados para atender esta solicitação e encaminhá-la ao representante da região.</span></label>
            <button class="button" type="submit">Enviar interesse à La Música</button>
            <p class="form-note">Ao continuar, será aberta uma mensagem estruturada no WhatsApp oficial da La Música. O lead somente será concluído quando você enviar a mensagem.</p>
          </form>
          <div class="lead-confirmation" data-lead-confirmation hidden><strong>Solicitação preparada</strong><p data-lead-confirmation-text></p><a data-lead-retry href="#" rel="noopener noreferrer" target="_blank">Abrir WhatsApp novamente →</a></div>
        </div>
      </div>
    </div>`;

  const mapSource = 'https://raw.githubusercontent.com/LuizJarduli/brazil-map/323651225a56fe37ee2d7db282a2fba972109ebd/src/app/components/brazil.component.ts';
  const mapStage = section.querySelector('[data-map-stage]');
  const mapCaption = section.querySelector('[data-map-caption]');
  const mapReset = section.querySelector('[data-map-reset]');
  const stateSelect = section.querySelector('[data-lead-state-select]');
  const repState = section.querySelector('[data-lead-rep-state]');
  const repName = section.querySelector('[data-lead-rep-name]');
  const repCoverage = section.querySelector('[data-lead-rep-coverage]');
  const leadState = section.querySelector('[data-lead-state]');
  const leadRepresentative = section.querySelector('[data-lead-representative]');
  let mapSvg = null;
  let fullViewBox = '0 0 1080 1080';

  const representativeFor = (code) => representatives[code] || national;

  const transformedBounds = (element) => {
    const box = element.getBBox();
    const matrix = element.getCTM();
    if (!matrix) return box;
    const points = [
      new DOMPoint(box.x, box.y), new DOMPoint(box.x + box.width, box.y),
      new DOMPoint(box.x + box.width, box.y + box.height), new DOMPoint(box.x, box.y + box.height)
    ].map((point) => point.matrixTransform(matrix));
    const xs = points.map((point) => point.x);
    const ys = points.map((point) => point.y);
    return {x:Math.min(...xs), y:Math.min(...ys), width:Math.max(...xs)-Math.min(...xs), height:Math.max(...ys)-Math.min(...ys)};
  };

  const viewBoxFor = (box, code) => {
    const factor = code === 'DF' ? 4.5 : .55;
    const pad = Math.max(20, Math.max(box.width, box.height) * factor);
    return `${box.x-pad} ${box.y-pad} ${box.width+pad*2} ${box.height+pad*2}`;
  };

  const zoomToState = (code) => {
    if (!mapSvg) return;
    const path = mapSvg.querySelector(`#BR-${code}`);
    if (!path) return;
    mapSvg.querySelectorAll('path[id^="BR-"]').forEach((item) => item.classList.toggle('selected', item === path));
    mapStage.classList.add('is-zoomed');
    mapSvg.setAttribute('viewBox', viewBoxFor(transformedBounds(path), code));
  };

  const resetMap = () => {
    if (!mapSvg) return;
    mapSvg.setAttribute('viewBox', fullViewBox);
    mapStage.classList.remove('is-zoomed');
  };

  const selectRegion = (code, zoom = true) => {
    const state = stateNames[code];
    const rep = representativeFor(code);
    if (!state) return;
    stateSelect.value = code;
    repState.textContent = `${state} · ${code}`;
    repName.textContent = rep.name;
    repCoverage.textContent = representatives[code] ? `Cobertura: ${rep.coverage}.` : `${rep.coverage}.`;
    leadState.value = code;
    leadRepresentative.value = rep.name;
    mapCaption.textContent = `${state} · ${representatives[code] ? 'representante regional' : 'atendimento nacional'}`;
    if (zoom) zoomToState(code);
  };

  const buildMap = async () => {
    try {
      const response = await fetch(mapSource, {cache:'force-cache'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const source = await response.text();
      const start = source.indexOf('<svg');
      const end = source.lastIndexOf('</svg>') + 6;
      if (start < 0 || end < 6) throw new Error('SVG não localizado');
      let markup = source.slice(start, end)
        .replace(/\s+@\w+="[^"]*"/g, '')
        .replace(/\s+\??hidden="[^"]*"/g, '');
      const parsed = new DOMParser().parseFromString(markup, 'image/svg+xml');
      if (parsed.querySelector('parsererror')) throw new Error('SVG inválido');
      mapSvg = document.importNode(parsed.documentElement, true);
      mapSvg.removeAttribute('width');
      mapSvg.removeAttribute('height');
      mapSvg.setAttribute('aria-label', 'Mapa interativo do Brasil por unidades federativas');
      mapSvg.setAttribute('role', 'img');
      fullViewBox = mapSvg.getAttribute('viewBox') || fullViewBox;
      mapStage.replaceChildren(mapSvg);
      const paths = mapSvg.querySelectorAll('path[id^="BR-"]');
      if (paths.length !== 27) throw new Error(`Mapa incompleto: ${paths.length} estados`);
      paths.forEach((path) => {
        const code = path.id.replace('BR-', '');
        path.dataset.state = code;
        path.setAttribute('tabindex', '0');
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', stateNames[code] || code);
        path.classList.toggle('has-representative', Boolean(representatives[code]));
        path.addEventListener('click', () => selectRegion(code));
        path.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectRegion(code);
          }
        });
      });
      selectRegion('SP', false);
    } catch (error) {
      console.error(error);
      mapStage.innerHTML = '<p class="lead-map-loading">Não foi possível carregar o mapa. Use a lista de estados ao lado.</p>';
    }
  };

  stateSelect.addEventListener('change', () => selectRegion(stateSelect.value));
  mapReset.addEventListener('click', resetMap);
  buildMap();

  const form = section.querySelector('[data-regional-lead-form]');
  const confirmation = section.querySelector('[data-lead-confirmation]');
  const confirmationText = section.querySelector('[data-lead-confirmation-text]');
  const retry = section.querySelector('[data-lead-retry]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const code = String(data.get('estado') || stateSelect.value || 'SP');
    const state = stateNames[code] || code;
    const representative = String(data.get('representante') || representativeFor(code).name);
    const leadId = `LM-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
    const message = [
      'NOVO LEAD — SITE LA MÚSICA',
      `ID: ${leadId}`,
      `Estado: ${state} (${code})`,
      `Responsável sugerido: ${representative}`,
      '',
      `Nome: ${String(data.get('nome') || '').trim()}`,
      `WhatsApp: ${String(data.get('whatsapp') || '').trim()}`,
      `Cidade: ${String(data.get('cidade') || '').trim()}`,
      `Perfil: ${String(data.get('perfil') || '').trim()}`,
      `Instrumento/categoria: ${String(data.get('instrumento') || '').trim()}`,
      `Interesse: ${String(data.get('interesse') || '').trim()}`,
      `Mensagem: ${String(data.get('mensagem') || '').trim()}`,
      'Consentimento para atendimento e encaminhamento regional: sim'
    ].join('\n');
    const url = `https://wa.me/5519999251030?text=${encodeURIComponent(message)}`;
    confirmation.hidden = false;
    confirmationText.textContent = `Lead ${leadId} preparado para ${state}. Envie a mensagem no WhatsApp para concluir.`;
    retry.href = url;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
