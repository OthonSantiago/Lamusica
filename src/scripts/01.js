      setup: 'Gonzalez Jazz Local, Classic e Malbec nos saxofones.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/df6872e1-c4bf-4bea-b9ec-d021d1ddd723-qczfbq6qpzx60zvuj5urlym1xvlyol8yww6c26sbrc.jpg',
      instagram: 'https://www.instagram.com/fabiocostasax/', youtube: 'https://www.youtube.com/@FabioCostaSax'
    },
    'marcelo-fofao': {
      name: 'Marcelo Fofão', role: 'Saxofonista', focus: 'Performance e educação online',
      bio: 'Músico paulistano formado desde a infância em ambientes sinfônicos, sacros e populares. Atua como solista, diretor, compositor, arranjador e educador, com cursos e metodologia própria.',
      setup: 'Artista Gonzalez e educador musical.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/marcelofofao-qcy6vjpw1he9708ggh53urejtiowuena8qmqe7e0eg.png',
      instagram: 'https://www.instagram.com/marcelofofaosaxofonista/', youtube: 'https://www.youtube.com/@PONTODEAUMENTOACADEMY'
    },
    'ivan-sacerdote': {
      name: 'Ivan Sacerdote', role: 'Clarinetista', focus: 'Música brasileira contemporânea',
      bio: 'Clarinetista de linguagem plural, transitando por choro, samba, jazz, bossa nova, forró e música de concerto. Já atuou com orquestras e importantes artistas brasileiros em turnês e gravações.',
      setup: 'Artista da marca com foco na versatilidade do clarinete.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/ivansacerdote-qcy6vjpw1he9708ggh53urejtiowuena8qmqe7e0eg.png',
      instagram: 'https://www.instagram.com/ivansacerdote/', youtube: 'https://www.youtube.com/@ivansacerdote4174'
    }
  };

  const artistDialog = document.querySelector('[data-artist-dialog]');
  const closeArtistDialog = () => {
    if (artistDialog?.open) artistDialog.close();
    document.body.classList.remove('dialog-open');
  };

  document.querySelectorAll('[data-artist]').forEach((button) => {
    button.addEventListener('click', () => {
      const artist = artistData[button.dataset.artist];
      if (!artist || !artistDialog) return;

      const image = artistDialog.querySelector('[data-dialog-image]');
      image.src = artist.image;
      image.alt = `${artist.name}, ${artist.role.toLowerCase()}`;
      artistDialog.querySelector('[data-dialog-role]').textContent = artist.role;
      artistDialog.querySelector('[data-dialog-name]').textContent = artist.name;
      artistDialog.querySelector('[data-dialog-focus]').textContent = artist.focus;
      artistDialog.querySelector('[data-dialog-bio]').textContent = artist.bio;
      artistDialog.querySelector('[data-dialog-setup]').textContent = artist.setup;
      artistDialog.querySelector('[data-dialog-instagram]').href = artist.instagram;
      artistDialog.querySelector('[data-dialog-youtube]').href = artist.youtube;
      artistDialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });

  artistDialog?.querySelector('[data-dialog-close]')?.addEventListener('click', closeArtistDialog);
  artistDialog?.addEventListener('click', (event) => {
    if (event.target === artistDialog) closeArtistDialog();
  });
  artistDialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  const representatives = {
    AL: { state: 'Alagoas', name: 'Aline Carvalho', email: 'alaynecarvalho@gmail.com', phone: '+55 81 99966-8352', digits: '5581999668352' },
    BA: { state: 'Bahia', name: 'Gilvan Marques', email: 'gilvanmarques56@gmail.com', phone: '+55 79 98844-4711', digits: '5579988444711' },
    CE: { state: 'Ceará', name: 'Aline Carvalho', email: 'alaynecarvalho@gmail.com', phone: '+55 81 99966-8352', digits: '5581999668352' },
    DF: { state: 'Distrito Federal', name: 'Antonio Lopes', email: 'loucospormusica.lopes@gmail.com', phone: '+55 62 99299-5092', digits: '5562992995092' },
    GO: { state: 'Goiás', name: 'Antonio Lopes', email: 'loucospormusica.lopes@gmail.com', phone: '+55 62 99299-5092', digits: '5562992995092' },
    MA: { state: 'Maranhão', name: 'Marivalda Aquino', email: 'marivalda_aquino@yahoo.com.br', phone: '+55 86 99941-4462', digits: '5586999414462' },
    MT: { state: 'Mato Grosso', name: 'Antonio Espinosa', email: 'antoniovendasmtms@hotmail.com', phone: '+55 67 99810-2789', digits: '5567998102789' },
    MS: { state: 'Mato Grosso do Sul', name: 'Antonio Espinosa', email: 'antoniovendasmtms@hotmail.com', phone: '+55 67 99810-2789', digits: '5567998102789' },
    PA: { state: 'Pará', name: 'Marivalda Aquino', email: 'marivalda_aquino@yahoo.com.br', phone: '+55 86 99941-4462', digits: '5586999414462' },
    PB: { state: 'Paraíba', name: 'Aline Carvalho', email: 'alaynecarvalho@gmail.com', phone: '+55 81 99966-8352', digits: '5581999668352' },
    PR: { state: 'Paraná', name: 'João Carlos', email: 'skrepresentacoescw@gmail.com', phone: '+55 41 99953-6282', digits: '5541999536282' },
    PE: { state: 'Pernambuco', name: 'Aline Carvalho', email: 'alaynecarvalho@gmail.com', phone: '+55 81 99966-8352', digits: '5581999668352' },
    PI: { state: 'Piauí', name: 'Marivalda Aquino', email: 'marivalda_aquino@yahoo.com.br', phone: '+55 86 99941-4462', digits: '5586999414462' },
    RN: { state: 'Rio Grande do Norte', name: 'Aline Carvalho', email: 'alaynecarvalho@gmail.com', phone: '+55 81 99966-8352', digits: '5581999668352' },
    RJ: { state: 'Rio de Janeiro', name: 'Chicão Mendes', email: 'a.franciscomendes@gmail.com', phone: '+55 21 96474-8858', digits: '5521964748858' },
    SP: { state: 'São Paulo', name: 'Marcelo Silva', email: 'marcelosilvadestak@gmail.com', phone: '+55 11 99354-8305', digits: '5511993548305' },
    SE: { state: 'Sergipe', name: 'Gilvan Marques', email: 'gilvanmarques56@gmail.com', phone: '+55 79 98844-4711', digits: '5579988444711' },
    TO: { state: 'Tocantins', name: 'Antonio Lopes', email: 'loucospormusica.lopes@gmail.com', phone: '+55 62 99299-5092', digits: '5562992995092' }
  };

  const stateSelect = document.querySelector('[data-state-select]');
  const stateButtons = document.querySelectorAll('[data-state]');
  const repState = document.querySelector('[data-rep-state]');
  const repName = document.querySelector('[data-rep-name]');
  const repPhone = document.querySelector('[data-rep-phone]');
  const repEmail = document.querySelector('[data-rep-email]');
  const repWhatsapp = document.querySelector('[data-rep-whatsapp]');

  const selectRepresentative = (code) => {
    const rep = representatives[code];
    if (!rep) return;
