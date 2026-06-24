(() => {
  'use strict';

  const section = document.querySelector('#representantes');
  if (!section) return;

  const states = {
    AC:{name:'Acre',x:16,y:50},AL:{name:'Alagoas',x:83,y:52},AP:{name:'Amapá',x:54,y:12},AM:{name:'Amazonas',x:32,y:31},BA:{name:'Bahia',x:72,y:57},CE:{name:'Ceará',x:79,y:37},DF:{name:'Distrito Federal',x:59,y:60},ES:{name:'Espírito Santo',x:79,y:72},GO:{name:'Goiás',x:57,y:61},MA:{name:'Maranhão',x:66,y:35},MT:{name:'Mato Grosso',x:43,y:53},MS:{name:'Mato Grosso do Sul',x:46,y:69},MG:{name:'Minas Gerais',x:68,y:69},PA:{name:'Pará',x:51,y:30},PB:{name:'Paraíba',x:87,y:44},PR:{name:'Paraná',x:58,y:84},PE:{name:'Pernambuco',x:82,y:47},PI:{name:'Piauí',x:69,y:44},RJ:{name:'Rio de Janeiro',x:73,y:78},RN:{name:'Rio Grande do Norte',x:88,y:40},RS:{name:'Rio Grande do Sul',x:54,y:95},RO:{name:'Rondônia',x:29,y:52},RR:{name:'Roraima',x:34,y:13},SC:{name:'Santa Catarina',x:59,y:90},SP:{name:'São Paulo',x:63,y:77},SE:{name:'Sergipe',x:80,y:56},TO:{name:'Tocantins',x:56,y:47}
  };

  const representatives = {
    AL:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},CE:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},PB:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},PE:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},RN:{name:'Aline Carvalho',coverage:'Alagoas, Ceará, Paraíba, Pernambuco e Rio Grande do Norte'},BA:{name:'Gilvan Marques',coverage:'Bahia e Sergipe'},SE:{name:'Gilvan Marques',coverage:'Bahia e Sergipe'},DF:{name:'Antonio Lopes',coverage:'Distrito Federal, Goiás e Tocantins'},GO:{name:'Antonio Lopes',coverage:'Distrito Federal, Goiás e Tocantins'},TO:{name:'Antonio Lopes',coverage:'Distrito Federal, Goiás e Tocantins'},MA:{name:'Marivalda Aquino',coverage:'Maranhão, Pará e Piauí'},PA:{name:'Marivalda Aquino',coverage:'Maranhão, Pará e Piauí'},PI:{name:'Marivalda Aquino',coverage:'Maranhão, Pará e Piauí'},MT:{name:'Antonio Espinosa',coverage:'Mato Grosso e Mato Grosso do Sul'},MS:{name:'Antonio Espinosa',coverage:'Mato Grosso e Mato Grosso do Sul'},PR:{name:'João Carlos',coverage:'Paraná'},RJ:{name:'Chicão Mendes',coverage:'Rio de Janeiro'},SP:{name:'Marcelo Silva',coverage:'São Paulo'}
  };

  const national = {name:'Equipe La Música',coverage:'Atendimento nacional e encaminhamento para o canal disponível'};
  const options = Object.entries(states)
    .sort((a,b) => a[1].name.localeCompare(b[1].name,'pt-BR'))
    .map(([code,state]) => `<option value="${code}"${code === 'SP' ? ' selected' : ''}>${state.name}</option>`)
    .join('');
  const markers = Object.entries(states)
    .map(([code,state]) => `<button class="map-state-button" data-map-state="${code}" style="--x:${state.x}%;--y:${state.y}%" type="button" aria-label="Selecionar ${state.name}">${code}</button>`)
    .join('');

  section.classList.add('lead-routing-enabled');
  section.innerHTML = `
    <div class="container">
      <div class="section-heading reveal visible">
        <div><span class="eyebrow dark">Cobertura comercial</span><h2>Escolha seu estado e solicite atendimento.</h2></div>
        <p>A La Música recebe o interesse, qualifica o lead e encaminha a oportunidade ao representante responsável pela região.</p>
      </div>
      <div class="lead-routing-layout">
        <div class="lead-routing-map reveal visible">
          <div class="lead-map-toolbar"><button class="lead-map-reset" data-map-reset type="button" disabled>Ver Brasil inteiro</button><span data-map-caption>Selecione um estado no mapa</span></div>
          <div class="lead-map-stage">
            <div class="lead-map-viewport" data-map-viewport>
              <div class="lead-map-canvas" data-map-canvas>
                <img class="lead-map-image" data-map-image alt="Mapa do Brasil dividido por estados" src="https://raw.githubusercontent.com/react-map/react-map/3ed7f9b956e9031fd284ad654164b5abf6c0cdda/assets/done/brazil.svg"/>
                <svg class="lead-map-fallback" aria-label="Silhueta alternativa do Brasil" role="img" viewBox="0 0 480 520"><path fill="rgba(113,216,244,.18)" stroke="rgba(255,255,255,.65)" stroke-width="3" d="M178 24l68 16 48 44 63 7 44 57-20 56 26 42-35 39-15 68-57 33-26 72-48 38-28-73-52-34-36-63-43-23 29-65-18-56 49-29 16-69 63-14z"/></svg>
                ${markers}
              </div>
              <div class="lead-map-selected" data-map-selected></div>
            </div>
          </div>
          <div class="lead-map-legend"><span><i></i> Estado com representante regional</span><small>Todos os estados geram atendimento</small></div>
          <p class="lead-map-help">Clique em um estado para aproximar o mapa e abrir a ficha regional.</p>
          <p class="map-source-note">Mapa vetorial: <a href="https://github.com/react-map/react-map" rel="noopener noreferrer" target="_blank">react-map</a>, licença MIT.</p>
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

  const viewport = section.querySelector('[data-map-viewport]');
  const canvas = section.querySelector('[data-map-canvas]');
  const image = section.querySelector('[data-map-image]');
  const caption = section.querySelector('[data-map-caption]');
  const selectedLabel = section.querySelector('[data-map-selected]');
  const resetButton = section.querySelector('[data-map-reset]');
  const select = section.querySelector('[data-lead-state-select]');
  const repState = section.querySelector('[data-lead-rep-state]');
  const repName = section.querySelector('[data-lead-rep-name]');
  const repCoverage = section.querySelector('[data-lead-rep-coverage]');
  const leadState = section.querySelector('[data-lead-state]');
  const leadRepresentative = section.querySelector('[data-lead-representative]');

  image.addEventListener('error', () => viewport.classList.add('map-fallback-active'), {once:true});

  const representativeFor = (code) => representatives[code] || national;
  const resetMap = () => {
    viewport.classList.remove('is-zoomed');
    canvas.style.transformOrigin = '50% 50%';
    canvas.style.transform = 'scale(1)';
    resetButton.disabled = true;
    section.querySelectorAll('[data-map-state]').forEach((button) => button.classList.remove('selected'));
    selectedLabel.textContent = '';
  };

  const selectState = (code, zoom = true) => {
    const state = states[code];
    const rep = representativeFor(code);
    if (!state) return;
    select.value = code;
    repState.textContent = `${state.name} · ${code}`;
    repName.textContent = rep.name;
    repCoverage.textContent = representatives[code] ? `Cobertura: ${rep.coverage}.` : `${rep.coverage}.`;
    leadState.value = code;
    leadRepresentative.value = rep.name;
    caption.textContent = `${state.name} · ${representatives[code] ? 'representante regional' : 'atendimento nacional'}`;
    selectedLabel.textContent = `${state.name} · ${code}`;
    section.querySelectorAll('[data-map-state]').forEach((button) => button.classList.toggle('selected', button.dataset.mapState === code));
    if (zoom) {
      canvas.style.transformOrigin = `${state.x}% ${state.y}%`;
      canvas.style.transform = 'scale(2.35)';
      viewport.classList.add('is-zoomed');
      resetButton.disabled = false;
    }
  };

  section.querySelectorAll('[data-map-state]').forEach((button) => button.addEventListener('click', () => selectState(button.dataset.mapState)));
  select.addEventListener('change', () => selectState(select.value));
  resetButton.addEventListener('click', resetMap);
  selectState('SP', false);

  const form = section.querySelector('[data-regional-lead-form]');
  const confirmation = section.querySelector('[data-lead-confirmation]');
  const confirmationText = section.querySelector('[data-lead-confirmation-text]');
  const retry = section.querySelector('[data-lead-retry]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const code = String(data.get('estado') || select.value || 'SP');
    const state = states[code]?.name || code;
    const representative = String(data.get('representante') || representativeFor(code).name);
    const leadId = `LM-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
    const message = ['NOVO LEAD — SITE LA MÚSICA',`ID: ${leadId}`,`Estado: ${state} (${code})`,`Responsável sugerido: ${representative}`,'',`Nome: ${String(data.get('nome') || '').trim()}`,`WhatsApp: ${String(data.get('whatsapp') || '').trim()}`,`Cidade: ${String(data.get('cidade') || '').trim()}`,`Perfil: ${String(data.get('perfil') || '').trim()}`,`Instrumento/categoria: ${String(data.get('instrumento') || '').trim()}`,`Interesse: ${String(data.get('interesse') || '').trim()}`,`Mensagem: ${String(data.get('mensagem') || '').trim()}`,'Consentimento para atendimento e encaminhamento regional: sim'].join('\n');
    const url = `https://wa.me/5519999251030?text=${encodeURIComponent(message)}`;
    confirmation.hidden = false;
    confirmationText.textContent = `Lead ${leadId} preparado para ${state}. Envie a mensagem no WhatsApp para concluir.`;
    retry.href = url;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
