# Confiance Restaurante — site institucional

Site responsivo em HTML, CSS e JavaScript puros, sem bibliotecas nem etapa de build.

## Como abrir

1. Extraia o ZIP.
2. Abra a pasta `confiance-restaurante-site` no Visual Studio Code.
3. Abra `index.html` no navegador, ou use a extensão Live Server para testar em outro dispositivo.

## Estrutura

```
confiance-restaurante-site/
├── index.html              conteúdo, SEO (meta e JSON-LD) e marcação
├── css/
│   ├── style.css           identidade visual, tipografia, componentes
│   └── responsive.css      tablet, celular e telas pequenas
├── js/
│   └── main.js             menu mobile, seção ativa, animações, ano automático
└── assets/
    ├── confiance-logo.png  logotipo
    └── favicon.svg         ícone do site
```

## O que tem no site

- **Topo:** apresentação, duas ações principais e três informações rápidas (modelo, horário e endereço).
- **O restaurante:** texto de apresentação, três destaques e uma composição de fotos.
- **Buffet:** como funciona (escolha, monte e pague pelo peso), três destaques e chamada para o WhatsApp.
- **Contatos e localização:** mapa, WhatsApp, telefone, Instagram, endereço e horário de funcionamento. No celular, este bloco aparece antes do mapa.
- **Rodapé:** navegação, contatos e redes sociais.
- **Celular:** menu em gaveta e barra fixa com Mapa, Ligar e WhatsApp.

## Como trocar informações

| O que mudar | Onde mudar |
| --- | --- |
| Número de WhatsApp | Procure por `554832118077` em `index.html` e troque em todos os links `wa.me` |
| Telefone | Procure por `+554832118077` e `(48) 3211-8077` (inclui o JSON-LD) |
| Horário | Seção "Funcionamento", o bloco "Almoço" do topo e o `openingHoursSpecification` no JSON-LD |
| Textos do buffet | Seção `#buffet` em `index.html` |
| Cores | Variáveis no início de `css/style.css` (`:root`) |
| Fotos | Troque os endereços `images.unsplash.com` pelas fotos reais, mantendo a proporção das caixas |

## Antes de publicar

- Confirmar se o número (48) 3211-8077 aceita WhatsApp. Números fixos geralmente não aceitam; nesse caso, use um celular comercial nos links `wa.me`.
- Confirmar o horário com o restaurante. O horário de segunda a sábado, 11h30 às 14h30, com domingo fechado, veio de listagens públicas.
- Confirmar o cardápio e a disponibilidade da feijoada aos sábados.
- Substituir as imagens ilustrativas por fotos reais e autorizadas do restaurante.
- Confirmar a autorização para uso da marca e do logotipo.
- Publicar em domínio e hospedagem aprovados pelo proprietário.
- Depois de publicar, colocar o endereço definitivo em `og:image` e incluir a URL do site no JSON-LD, se desejado.

## Acessibilidade e desempenho

- Ícones em SVG inline, sem dependência de fontes de símbolos.
- Links que abrem em nova aba avisam isso para leitores de tela.
- Navegação pelo teclado, link "pular para o conteúdo" e contorno de foco visível.
- Respeita a preferência de movimento reduzido do sistema.
- Imagens com `width` e `height` definidos e carregamento preguiçoso fora da tela.
- Sem JavaScript, o conteúdo continua visível, mas o menu do celular não abre e as animações de entrada não acontecem.
