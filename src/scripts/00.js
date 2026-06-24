(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const year = document.querySelector('[data-year]');

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('open') ?? false;
    menuButton.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton?.classList.remove('active');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle('active', item === button));
      cards.forEach((card) => {
        const categories = card.dataset.category?.split(' ') ?? [];
        card.classList.toggle('hidden', selected !== 'all' && !categories.includes(selected));
      });
    });
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('visible'));
  }

  const artistData = {
    'angelo-torres': {
      name: 'Ângelo Torres', role: 'Saxofonista', focus: 'Gospel, pop e smooth jazz',
      bio: 'Saxofonista carioca formado pelo Conservatório Nacional de Música, com trajetória em shows, gravações e workshops no Brasil e nos Estados Unidos. Sua linguagem combina gospel, pop e smooth jazz.',
      setup: 'Gonzalez Local Jazz 3 nos saxofones soprano, alto e tenor.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/8cb0c089-0dd0-41f2-a3e6-880162178460-qcxzua3ekiowxg4bczzy0o7dnz0iud6y36kva6wsy0.jpg',
      instagram: 'https://www.instagram.com/angelotorresoficial/', youtube: 'https://www.youtube.com/@AngeloTorresOficialSax'
    },
    'elias-coutinho': {
      name: 'Elias Coutinho', role: 'Saxofonista', focus: 'Música instrumental brasileira',
      bio: 'Saxofonista paraense, professor e artista atuante na cena instrumental da Região Norte. Participa de festivais, shows e workshops no Brasil e no exterior e mantém conteúdo educacional nas redes.',
      setup: 'Artista da marca e educador musical.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/eliascoutinho-qcy4x2rhnmxcrgliyij1f1lgik18rbvqvxv84dvkw8.png',
      instagram: 'https://www.instagram.com/eliascoutinhosax/', youtube: 'https://www.youtube.com/@EliasCoutinhosax'
    },
    'theo-santos': {
      name: 'Théo Santos', role: 'Saxofonista', focus: 'Gospel e African American Music',
      bio: 'Nascido em Pernambuco e radicado na Paraíba, desenvolveu sua formação em escolas, sociedades musicais e na extensão da UFPB. Reúne ampla experiência em shows, gravações e produção fonográfica.',
      setup: 'Gonzalez Jazz: soprano 2,5; alto 2,5; tenor 3.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/754dfdfb-ce0b-408a-8a48-fb8d98ef89e6-qcy6vknq8bfjim73azjqf960ewka23r0kva7vhcm88.jpg',
      instagram: 'https://www.instagram.com/theosantos_oficial/', youtube: 'https://www.youtube.com/@TheoSantosSaxofonistaOficial01'
    },
    'suelen-mondini': {
      name: 'Suelen Mondini', role: 'Saxofonista e clarinetista', focus: 'Educação e produção de conteúdo',
      bio: 'Educadora musical, instrumentista e criadora de conteúdo. Produz cursos, materiais didáticos e videoaulas, além de atuar em projetos que unem saxofone, música pop e música eletrônica.',
      setup: 'Gonzalez Local Jazz e FOF em saxofones e clarineta.', image: 'https://lamusica.com.br/wp-content/uploads/2023/09/suelenmondini.png',
      instagram: 'https://www.instagram.com/suelenmondini/', youtube: 'https://www.youtube.com/@SuelenMondini'
    },
    'samuel-pompeo': {
      name: 'Samuel Pompeo', role: 'Saxofonista e multi-instrumentista', focus: 'Jazz, choro e música de concerto',
      bio: 'Professor, pesquisador e instrumentista com atuação em importantes orquestras e ao lado de nomes da música brasileira e internacional. Lidera projetos autorais e participa de festivais e masterclasses.',
      setup: 'Utiliza diferentes linhas Gonzalez em toda a família dos saxofones, clarineta e clarone.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/samuelpompeo-qcy4x3pbugyn32k5t0xnzjcx3xwlz0zh82iplnu6q0.png',
      instagram: 'https://www.instagram.com/samuelpompeo/', youtube: 'https://www.youtube.com/@samuelpompeo'
    },
    'herson-amorin': {
      name: 'Herson Amorin', role: 'Clarinetista', focus: 'Performance, pesquisa e educação',
      bio: 'Doutor em Música pela UNICAMP e professor de clarineta da Universidade Federal do Pará. Foi clarineta solista da Orquestra Sinfônica do Theatro da Paz e criou o Canal do Clarinete.',
      setup: 'Gonzalez GD na clarineta e Classic no clarone; abraçadeiras Bambú Nova.', image: 'https://lamusica.com.br/wp-content/uploads/elementor/thumbs/7a02c190-f313-4cfa-8e89-2269c5b2cfa2-qcy6vis1uncyve9tlyqha9n384tjmpjjwlz8wxfeko.jpg',
      instagram: 'https://www.instagram.com/hersonamorim/', youtube: 'https://www.youtube.com/@CanaldoClarinete'
    },
    'fabio-costa': {
      name: 'Fábio Costa', role: 'Saxofonista', focus: 'Sax soprano e música cristã',
      bio: 'Instrumentista do interior de São Paulo que encontrou no sax soprano sua principal voz musical. Sua trajetória reúne estudo, ensino, apresentações e atuação ligada à música cristã.',
