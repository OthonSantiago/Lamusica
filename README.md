# La Música — site institucional

Site institucional responsivo da La Música, voltado à apresentação da empresa como importadora e distribuidora B2B de marcas especializadas em instrumentos de sopro.

## Site publicado

`https://othonsantiago.github.io/Lamusica/`

O deploy acontece automaticamente a cada atualização da branch `main` pelo workflow `.github/workflows/pages.yml`.

### Configuração do GitHub Pages

Em **Settings → Pages → Build and deployment**, a fonte deve estar definida como **GitHub Actions**. Não crie um segundo workflow pelo catálogo de modelos, porque o projeto já possui o workflow oficial de publicação.

## Estrutura canônica

O código-fonte permanece organizado em módulos, mas o build publica uma única página estática em `_site/index.html`. O background aprovado e a caixa de palhetas são incorporados diretamente nessa página para evitar falhas de caminho e cache.

Arquivos utilizados na publicação:

- `src/index/00.html` até `src/index/04.html`: conteúdo da página;
- `src/styles/00.css` até `src/styles/15.css`: estilos gerais;
- `src/styles/final.css`: composição definitiva do hero;
- `src/scripts/00.js`, `01.js`, `02.js`, `04.js` e `08.js`: comportamento ativo;
- `src/assets-source/hero-background-v2/`: background aprovado;
- `src/assets-source/hero-product/`: caixa de palhetas separada do background;
- `tools/build_pages.py`: consolidação do site e incorporação dos assets em uma página;
- `.github/workflows/pages.yml`: build e deploy do GitHub Pages.

A caixa permanece independente e substituível pelo atributo `data-hero-product`. Não devem ser recriados arquivos numerados adicionais para corrigir o hero. Alterações futuras devem ser feitas apenas em `src/styles/final.css`, `src/scripts/08.js` e nos diretórios de assets correspondentes.

## Conteúdo

- posicionamento da La Música como ponte entre fabricantes, lojistas, representantes, artistas e músicos;
- catálogo institucional por categoria, sem venda direta ao consumidor final;
- apresentação das marcas distribuídas;
- área de artistas e representantes comerciais;
- jornadas para lojistas, músicos e novos representantes;
- formulário de atendimento pelo WhatsApp;
- navegação responsiva e acessível.

## Executar localmente

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Gerar o mesmo artefato publicado

```bash
python tools/build_pages.py
```

O resultado será criado em `_site/`. O site não utiliza frameworks, rastreadores ou cookies.

## Validação de conteúdo

Os dados públicos de artistas e representantes foram migrados do site institucional anterior. Antes de cada publicação comercial, contatos, estados atendidos, fotografias e biografias devem ser confirmados com a equipe da La Música.
