# Boas Práticas e Convenções no CSS

## Hierarquia e Especificidade

O efeito cascata em CSS é um algoritmo que define como os agentes do usuário combinam valores de propriedade originários de diferentes fontes.

1. **Origem**: A origem da folha de estilo determina a ordem de precedência.
2. **Especificidade**: A especificidade de um seletor determina qual regra é aplicada a um elemento. Quanto mais específico um seletor, maior será sua precedência.
3. **Ordem**: A ordem em que os seletores aparecem na folha de estilo determina qual deles tem precedência.

### Especificidade

A especificidade em CSS é uma forma de determinar qual regra CSS será aplicada caso haja conflito entre duas ou mais regras que se aplicam ao mesmo elemento.

A especificidade é calculada com base em quatro valores diferentes: o número de IDs no seletor, o número de classes e atributos no seletor, o número de elementos no seletor e a ordem em que aparecem.

- `style=""`: 1000;
- `#id {}`: 100;
- `.class {}`: 10;
- `p {}`: 1;

Quando duas regras têm a mesma especificidade, a última regra definida no código é aplicada. No entanto, se uma regra tiver o modificador **!important**, ela terá precedência sobre outras regras com a mesma especificidade.

### Herança

A herança em CSS é a maneira como os elementos HTML herdam propriedades de seus pais. Algumas propriedades são herdadas automaticamente, enquanto outras não são herdadas. As propriedades herdadas são aquelas que se aplicam a todos os elementos filhos de um elemento pai

## Compatibilidade entre Navegadores

Os motores de renderização são componentes de software principais de todos os principais navegadores da web. A principal tarefa de um mecanismo de renderização é transformar documentos HTML e outros recursos de uma página da internet em uma representação visual interativa no aparelho do usuário.

- **WebKit**: Um motor de código aberto usado pelo Safari no OS X e iOS, assim como por muitos outros navegadores em dispositivos móveis, incluindo o navegador nativo do Android.
  - _-webkit-_: Chrome/Edge/Opera/Safari;
- **Gecko**: Motor de código aberto desenvolvido pela Fundação Mozilla e usado pelo Firefox.
  - _-moz-_: Firefox;
- **Blink**: Motor de código aberto baseado no WebKit, usado pelo Google Chrome e Opera 23.

Para verificar compatibilidades, utilizar [Can I Use](https://caniuse.com/).

## Organizando os Estilos CSS

### Variáveis

Definição da variável na pseudoclasse `root`:

    :root {
        --cor-principal: #ff0000;
    }

Utilização da variável:

    h1 {
    color: var(--cor-principal);
    }

### BEM (Block, Element, Modifier)

BEM é uma metodologia de nomenclatura de classes CSS que ajuda a criar um código reutilizável e sustentável, onde a ideia é dividir a página em blocos.

Cada **bloco** é uma entidade independente, um “bloco de construção” de uma aplicação; uma abstração mais geral, com seu próprio significado, independente. Em seguida, cada bloco pode ter elementos e modificadores.

**Elementos** são partes do bloco que têm significado semântico e não podem ser usados separadamente do bloco.

**Modificadores** são propriedades que modificam o estado ou aparência do bloco ou elemento.

    [Block]__[ELEMENT]--[MODIFIER] {
        ...
    }

![BEM](https://sourcedcode.com/storage/2022/01/bem-simple-example.1.png)

### SMACSS (Scalable and Modular, Architecture for CSS)

É um padrão flexível, elaborado com base em anos de observação e experiência em projetos de alto nível. SMACSS é mais para uma normatização do que para invenção, nas palavras do próprio Jonathan Snook: “Está mais para um guia do que para um framework”. O objetivo é fornecer orientações claras sobre como organizar o CSS de maneira escalável e modular.

O SMACSS divide o CSS em cinco categorias de regras: base, layout, module, state e theme.

As regras de **base** são as do tipo que não utilizam seletores com classes ou ids, as encontramos em um CSS Reset ou normalize.css.

As regras de **layout** definem a estrutura geral da página. As regras de módulo são as que definem os componentes individuais da página.

As regras de **estado** são as que definem como os componentes se comportam em diferentes estados.

As regras de **tema** são as que definem a aparência visual da página.

![SMACSS](https://miro.medium.com/v2/resize:fit:592/1*HIID2rKeku4DlTl5GQ8Pbg.png)

### OOCSS (Object Oriented CSS)

 Segundo o OOCSS, um objeto de CSS é todo padrão visual que pode se repetir no projeto e é identificado através de uma classe. O estilo enfatiza a separação de propriedades de estrutura e de design.

No OOCSS, a **estrutura** é tudo o que é necessário para definir o layout da página. Isso inclui coisas como largura, altura, margem e preenchimento.

O **design** é tudo o que é necessário para definir a aparência visual da página. Isso inclui coisas como cor de fundo, cor da fonte e borda.

    .box-1 {
        width: 100px;
        height: 100px;
    }

    .box-2 {
        width: 200ox;
        height: 200px;
    }

    .box-border {
        border: 1px solid #fff
        border-radius: 5px;
        color: #ccc;
    }
