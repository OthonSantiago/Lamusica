# Produto substituível do hero

O cenário cultural do hero e a caixa de palhetas são camadas independentes.
A paisagem é carregada por `assets/hero/hero-landscape-final.webp`; o produto é renderizado dentro de `.hero-product-stage` pelo arquivo `src/scripts/08.js`.

## Produto padrão

Sem configuração adicional, o hero carrega uma imagem oficial da linha Gonzalez Regular Cut, marca distribuída pela La Música. A caixa criada em HTML e CSS permanece somente como fallback caso a imagem externa não possa ser carregada.

A imagem do produto não faz parte do background. Portanto, ela pode ser trocada sem gerar novamente a paisagem ou alterar os elementos culturais do hero.

## Substituir por outra imagem de produto

No elemento `<html>` de `src/index/00.html`, informe o novo caminho no atributo `data-hero-product`:

```html
<html lang="pt-BR" data-hero-product="assets/hero/meu-produto.webp">
```

Também é possível informar uma URL HTTPS autorizada pela política CSP do site. Quando a imagem carregar, o script oculta automaticamente a caixa de fallback e exibe o novo produto.

Recomendações do arquivo:

- fundo transparente;
- produto centralizado;
- sem margem transparente excessiva;
- resolução mínima de 600 px no maior lado;
- PNG ou WebP otimizado para o GitHub Pages.

Para restaurar o produto padrão oficial, remova o atributo `data-hero-product`.
