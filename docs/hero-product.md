# Produto substituível do hero

O cenário cultural do hero e a caixa de palhetas são camadas independentes.
A paisagem é carregada por `assets/hero/hero-landscape-final.webp`; o produto é renderizado dentro de `.hero-product-stage` pelo arquivo `src/scripts/08.js`.

## Caixa padrão

Sem configuração adicional, o site mostra a caixa padrão criada em HTML e CSS. Ela não faz parte da imagem de fundo e pode ser alterada sem gerar novamente a paisagem.

## Substituir por uma imagem de produto

1. Adicione uma imagem WebP ou PNG com fundo transparente ao diretório publicado de assets.
2. No elemento `<html>` de `src/index/00.html`, informe o caminho no atributo `data-hero-product`:

```html
<html lang="pt-BR" data-hero-product="assets/hero/meu-produto.webp">
```

Quando a imagem carregar, o script oculta automaticamente a caixa padrão e exibe o novo produto.

Recomendações do arquivo:

- fundo transparente;
- proporção vertical próxima de `0.62` (largura/altura);
- resolução mínima de 600 × 960 px;
- produto centralizado, sem margem transparente excessiva;
- WebP otimizado para manter boa qualidade no GitHub Pages.

Para voltar à caixa padrão, remova o atributo `data-hero-product`.
