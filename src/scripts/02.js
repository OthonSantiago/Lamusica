    repState.textContent = `${rep.state} · ${code}`;
    repName.textContent = rep.name;
    repPhone.textContent = rep.phone;
    repPhone.href = `tel:+${rep.digits}`;
    repEmail.textContent = rep.email;
    repEmail.href = `mailto:${rep.email}`;
    repWhatsapp.href = `https://wa.me/${rep.digits}?text=${encodeURIComponent(`Olá, vim pelo site da La Música e gostaria de atendimento para ${rep.state}.`)}`;
    if (stateSelect) stateSelect.value = code;
    stateButtons.forEach((button) => button.classList.toggle('active', button.dataset.state === code));
  };

  stateButtons.forEach((button) => button.addEventListener('click', () => selectRepresentative(button.dataset.state)));
  stateSelect?.addEventListener('change', () => selectRepresentative(stateSelect.value));
  selectRepresentative('SP');

  const contactForm = document.querySelector('[data-contact-form]');
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const text = [
      'Olá, gostaria de atendimento pela La Música.',
      '',
      `Nome: ${String(data.get('nome') || '').trim()}`,
      `Cidade: ${String(data.get('cidade') || '').trim()}`,
      `Perfil: ${String(data.get('perfil') || '').trim()}`,
      `Instrumento: ${String(data.get('instrumento') || '').trim()}`,
      `Mensagem: ${String(data.get('mensagem') || '').trim()}`
    ].join('\n');

    const url = `https://wa.me/5519999251030?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
