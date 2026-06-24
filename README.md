# La Música — redesign visual

Protótipo responsivo para modernização do site institucional da La Música.

## Site publicado

URL prevista no GitHub Pages:

`https://othonsantiago.github.io/Lamusica/`

O deploy é automático a cada atualização da branch `main` pelo workflow `.github/workflows/pages.yml`.

### Ativação inicial no GitHub

1. Acesse **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
3. Abra a aba **Actions** e execute novamente o workflow **Deploy GitHub Pages**, caso a primeira execução tenha ocorrido antes da ativação.

## Conteúdo da versão

- nova página inicial orientada à conversão;
- catálogo visual por categoria;
- guia de escolha de palhetas;
- apresentação das marcas;
- área para lojistas;
- formulário que prepara o atendimento no WhatsApp;
- aviso inicial de privacidade;
- navegação responsiva e acessível.

## Executar localmente

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

O protótipo não usa frameworks, rastreadores, cookies nem dependências externas.
