# La Música — redesign visual

Site institucional responsivo da La Música, estruturado para apresentar a empresa como importadora e distribuidora B2B de marcas especializadas em instrumentos de sopro.

## Site publicado

URL prevista no GitHub Pages:

`https://othonsantiago.github.io/Lamusica/`

O deploy é automático a cada atualização da branch `main` pelo workflow `.github/workflows/pages.yml`.

### Ativação inicial no GitHub

1. Acesse **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
3. Abra a aba **Actions** e execute novamente o workflow **Deploy GitHub Pages**, caso necessário.

## Conteúdo da versão

- posicionamento da La Música como ponte entre fabricantes, lojistas, representantes, artistas e músicos;
- catálogo institucional por categoria, sem venda direta ao consumidor final;
- guia para orientar músicos até um revendedor ou representante;
- apresentação das marcas distribuídas;
- área de artistas com nove perfis, fotografias e mini biografias;
- mapa comercial com representantes em 18 estados;
- área de cadastro para lojistas e interesse de novos representantes;
- formulário que prepara o atendimento no WhatsApp;
- aviso inicial de privacidade;
- navegação responsiva e acessível.

## Executar localmente

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

O site não usa frameworks, rastreadores, cookies nem dependências externas.

## Validação de conteúdo

Os dados públicos de artistas e representantes foram migrados do site institucional anterior. Antes de cada publicação comercial, contatos, estados atendidos, fotografias e biografias devem ser confirmados com a equipe da La Música.
