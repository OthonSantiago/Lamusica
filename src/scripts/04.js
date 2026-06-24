(() => {
  'use strict';

  const section = document.querySelector('#representantes');
  if (!section) return;

  const states = {
    AC:'Acre', AL:'Alagoas', AP:'Amapá', AM:'Amazonas', BA:'Bahia', CE:'Ceará',
    DF:'Distrito Federal', ES:'Espírito Santo', GO:'Goiás', MA:'Maranhão',
    MT:'Mato Grosso', MS:'Mato Grosso do Sul', MG:'Minas Gerais', PA:'Pará',
    PB:'Paraíba', PR:'Paraná', PE:'Pernambuco', PI:'Piauí', RJ:'Rio de Janeiro',
    RN:'Rio Grande do Norte', RS:'Rio Grande do Sul', RO:'Rondônia', RR:'Roraima',
    SC:'Santa Catarina', SP:'São Paulo', SE:'Sergipe', TO:'Tocantins'
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

  const national = {
    name:'Equipe La Música',
    coverage:'Atendimento nacional e encaminhamento para o canal disponível'
  };

  const options = Object.entries(states)
    .sort((a,b) => a[1].localeCompare(b[1], 'pt-BR'))
    .map(([code,name]) => `<option value="${code}"${code === 'SP' ? ' selected' : ''}>${name}</option>`)
    .join('');

  section.classList.add('lead-routing-enabled');
  section.innerHTML = `
    <div class="container">
      <div class="section-heading reveal visible">
        <div><span class="eyebrow dark">Cobertura comercial</span><h2>Escolha seu estado e solicite atendimento.</h2></div>
        <p>Clique diretamente no contorno do estado. A La Música recebe o interesse, qualifica o lead e encaminha a oportunidade ao responsável regional.</p>
      </div>
      <div class="lead-routing-layout">
        <div class="lead-routing-map reveal visible">
          <div class="lead-map-toolbar">
            <button class="lead-map-reset" data-map-reset type="button" disabled>Ver Brasil inteiro</button>
            <span data-map-caption>Selecione um estado no mapa</span>
          </div>
          <div class="lead-map-stage" data-map-stage>
            <div class="lead-map-loading">Carregando mapa do Brasil…</div>
          </div>
          <div class="lead-map-legend"><span><i></i> Estado com representante regional</span><small>Todos os estados geram atendimento</small></div>
          <p class="lead-map-help">O próprio desenho de cada estado é clicável. Também é possível selecionar pela lista ao lado.</p>
          <p class="map-source-note">Mapa vetorial versionado no projeto. Geometria derivada de <a href="https://github.com/react-map/react-map" rel="noopener noreferrer" target="_blank">react-map</a>, licença MIT.</p>
        </div>
        <div class="lead-capture-panel reveal visible">
          <div class="lead-state-selector"><label for="lead-state-select">Estado de interesse</label><select id="lead-state-select" data-lead-state-select>${options}</select></div>
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
            <div class="field-row"><label>Nome<input autocomplete="name" maxlength="80" name="nome" required type="text"/></label><label>WhatsApp<input autocomplete="tel" inputmode="tel" maxlength="24" name="whatsapp" placeholder="(DDD) número" required type="tel"/></label></div>
            <label>Cidade<input autocomplete="address-level2" maxlength="80" name="cidade" required type="text"/></label>
            <label>Seu perfil<select name="perfil" required><option value="">Selecione</option><option>Músico / estudante</option><option>Professor</option><option>Lojista / revendedor</option><option>Orquestra / instituição</option><option>Interesse em representação comercial</option></select></label>
            <label>Instrumento ou categoria<input maxlength="100" name="instrumento" placeholder="Ex.: saxofone alto, clarinete, acessórios" type="text"/></label>
            <label>Interesse principal<select name="interesse" required><option value="">Selecione</option><option>Encontrar produto para uso próprio</option><option>Comprar para uma instituição</option><option>Revender produtos La Música</option><option>Representar comercialmente a La Música</option><option>Suporte e orientação técnica</option></select></label>
            <label>Mensagem<textarea maxlength="600" name="mensagem" placeholder="Conte o que você procura para direcionarmos melhor o atendimento." rows="3"></textarea></label>
            <label class="lead-consent"><input name="consentimento" required type="checkbox"/><span>Autorizo a La Música a usar estes dados para atender esta solicitação e encaminhá-la ao representante da região.</span></label>
            <button class="button" type="submit">Enviar interesse à La Música</button>
            <p class="form-note">Será aberta uma mensagem estruturada no WhatsApp oficial da La Música. O lead é concluído quando a mensagem for enviada.</p>
          </form>
          <div class="lead-confirmation" data-lead-confirmation hidden><strong>Solicitação preparada</strong><p data-lead-confirmation-text></p><a data-lead-retry href="#" rel="noopener noreferrer" target="_blank">Abrir WhatsApp novamente →</a></div>
        </div>
      </div>
    </div>`;

  const mapStage = section.querySelector('[data-map-stage]');
  const caption = section.querySelector('[data-map-caption]');
  const resetButton = section.querySelector('[data-map-reset]');
  const select = section.querySelector('[data-lead-state-select]');
  const repState = section.querySelector('[data-lead-rep-state]');
  const repName = section.querySelector('[data-lead-rep-name]');
  const repCoverage = section.querySelector('[data-lead-rep-coverage]');
  const leadState = section.querySelector('[data-lead-state]');
  const leadRepresentative = section.querySelector('[data-lead-representative]');

  let mapSvg = null;
  let fullViewBox = '0 0 620 640';
  let selectedCode = 'SP';

  const representativeFor = (code) => representatives[code] || national;

  const updateRegionalCard = (code) => {
    const stateName = states[code];
    const representative = representativeFor(code);
    if (!stateName) return;

    selectedCode = code;
    select.value = code;
    repState.textContent = `${stateName} · ${code}`;
    repName.textContent = representative.name;
    repCoverage.textContent = representatives[code]
      ? `Cobertura: ${representative.coverage}.`
      : `${representative.coverage}.`;
    leadState.value = code;
    leadRepresentative.value = representative.name;
    caption.textContent = `${stateName} · ${representatives[code] ? 'representante regional' : 'atendimento nacional'}`;
  };

  const highlightState = (code) => {
    if (!mapSvg) return;
    mapSvg.querySelectorAll('path[data-state]').forEach((path) => {
      path.classList.toggle('selected', path.dataset.state === code);
    });
  };

  const stateViewBox = (path) => {
    const box = path.getBBox();
    const centerX = box.x + box.width / 2;
    const centerY = box.y + box.height / 2;
    const margin = Math.max(14, Math.max(box.width, box.height) * 0.38);
    const width = Math.max(88, box.width + margin * 2);
    const height = Math.max(88, box.height + margin * 2);
    return `${centerX - width / 2} ${centerY - height / 2} ${width} ${height}`;
  };

  const zoomToState = (code) => {
    if (!mapSvg) return;
    const path = mapSvg.querySelector(`path[data-state="${code}"]`);
    if (!path) return;

    highlightState(code);
    mapSvg.setAttribute('viewBox', stateViewBox(path));
    mapStage.classList.add('is-zoomed');
    resetButton.disabled = false;
  };

  const resetMap = () => {
    if (!mapSvg) return;
    mapSvg.setAttribute('viewBox', fullViewBox);
    mapStage.classList.remove('is-zoomed');
    resetButton.disabled = true;
    highlightState(selectedCode);
  };

  const selectState = (code, zoom = true) => {
    updateRegionalCard(code);
    highlightState(code);
    if (zoom) zoomToState(code);
  };

  const activatePath = (path) => {
    const code = path.dataset.state;
    path.setAttribute('tabindex', '0');
    path.setAttribute('role', 'button');
    path.setAttribute('aria-label', `Selecionar ${states[code] || code}`);
    path.classList.toggle('has-representative', Boolean(representatives[code]));

    path.addEventListener('click', () => selectState(code));
    path.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectState(code);
      }
    });
  };

  const loadMap = async () => {
    try {
      const response = await fetch('assets/maps/brazil-states.svg', {
        cache:'force-cache',
        credentials:'same-origin'
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const markup = await response.text();
      const parsed = new DOMParser().parseFromString(markup, 'image/svg+xml');
      if (parsed.querySelector('parsererror')) throw new Error('SVG inválido');

      mapSvg = document.importNode(parsed.documentElement, true);
      mapSvg.classList.add('lead-map-svg');
      mapSvg.removeAttribute('width');
      mapSvg.removeAttribute('height');
      mapSvg.setAttribute('aria-label', 'Mapa interativo do Brasil por estados');
      mapSvg.setAttribute('role', 'img');
      fullViewBox = mapSvg.getAttribute('viewBox') || fullViewBox;

      const paths = mapSvg.querySelectorAll('path[data-state]');
      if (paths.length !== 27) throw new Error(`Mapa incompleto: ${paths.length} estados`);
      paths.forEach(activatePath);

      mapStage.replaceChildren(mapSvg);
      requestAnimationFrame(() => selectState(selectedCode, false));
    } catch (error) {
      console.error(error);
      mapStage.innerHTML = `
        <div class="lead-map-error">
          <svg aria-label="Silhueta do Brasil" role="img" viewBox="0 0 480 520"><path d="M178 24l68 16 48 44 63 7 44 57-20 56 26 42-35 39-15 68-57 33-26 72-48 38-28-73-52-34-36-63-43-23 29-65-18-56 49-29 16-69 63-14z"/></svg>
          <p>Não foi possível exibir o mapa interativo. Selecione o estado pela lista ao lado.</p>
        </div>`;
    }
  };

  select.addEventListener('change', () => selectState(select.value));
  resetButton.addEventListener('click', resetMap);
  updateRegionalCard('SP');
  loadMap();

  const form = section.querySelector('[data-regional-lead-form]');
  const confirmation = section.querySelector('[data-lead-confirmation]');
  const confirmationText = section.querySelector('[data-lead-confirmation-text]');
  const retry = section.querySelector('[data-lead-retry]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const code = String(data.get('estado') || select.value || 'SP');
    const stateName = states[code] || code;
    const representative = String(data.get('representante') || representativeFor(code).name);
    const leadId = `LM-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
    const message = [
      'NOVO LEAD — SITE LA MÚSICA',
      `ID: ${leadId}`,
      `Estado: ${stateName} (${code})`,
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
    confirmationText.textContent = `Lead ${leadId} preparado para ${stateName}. Envie a mensagem no WhatsApp para concluir.`;
    retry.href = url;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
