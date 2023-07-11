# Transições e Animações

## Transformações 2D

As transformações 2D em CSS permitem modificar um elemento por sua forma, tamanho e posição. Os elementos podem ser transformados ao longo do eixo X e do eixo Y. Duas propriedades principais são utilizadas: `transform` e `transform-origin`.

### translate

A função `translate(x,y)` reposiciona um elemento na direção horizontal e/ou vertical. É possível utilizar translateX() e translateY();

### rotate, rotateX & rotateY

A função `rotate(n)` define uma transformação que gira um elemento em torno de um ponto fixo no plano 2D (eixo Z), sem deformá-lo. Utiliza a unidade `deg`.

Já `rotateX(n)` e `rotateY(n)` rotacionam em torno dos eixos X e Y, respectivamente.

### scale

A função `scale(x,y)` é uma transformação CSS que permite redimensionar um elemento no plano 2D.

### skew

A função `skew(x,y)` permite inclinar um elemento no plano 2D.

### matrix

 A função `matrix(a, b, c, d, tx, ty)` é usada para criar transformações complexas em elementos HTML, de uma forma mais matemática.

- a,b,c,d: Transformações lineares;
- tx, ty: Translações;

    matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())

## Transformações 3D

A perspectiva é o que dá a ilusão de que uma imagem é tridimensional. A propriedade `perspective` define quão longe um objeto (elemento) está longe do usuário, onde valores mais baixos resultam em um efeito 3D mais intenso do que o valor mais alto.

Ao definir essa propriedade a um elemento, faz com que os elementos **filhos** tenham essa impressão de perspectiva.

### transform-origin

A propriedade `transform-origin` define o ponto de origem das transformações de um elemento. Ela permite alterar a posição dos elementos transformados. O ponto de origem da transformação é o ponto em torno do qual uma transformação é aplicada.

### transform-style

A propriedade `transform-style` especifica como os elementos aninhados são renderizados no espaço 3D. Ela determina se um elemento deve ser achatado em um único plano (**flat**) ou preservar sua posição 3D (**preserve-3d**).

### backface-visibility

Controla se o lado traseiro do elemento deve ser renderizado ou escondido.

## Animações

A propriedade CSS `transition` é usada para criar efeitos de transição suaves entre dois estados de um elemento.

    transition: transition-property transition-duration transition-timing-function transition-delay;

- `transition-property`: Especifica as propriedades CSS que devem ser animadas.
  - Pode-se especificar várias propriedades separando-as com vírgulas;
  - Para animar todas as propriedades CSS que podem ser animadas, usar o valor **all**.
- `transition-duration`: Especifica a duração da transição em segundos ou milissegundos.
- `transition-timing-function`: Especifica a curva de tempo que deve ser usada para a transição.
  - Existem várias opções disponíveis, como **linear**, **ease-in**, **ease-out** e **ease-in-out**.
- `transition-delay`: Especifica o tempo de espera antes que a transição comece.

A regra `@keyframes` do CSS é usada para definir as etapas de uma animação.

    /* regra @keyframes */
    @keyframes mudar-cor {
    0% {background-color: red;}
    50% {background-color: yellow;}
    100% {background-color: blue;}
    }

    /* aplicação */
    div {
    animation-name: mudar-cor;
    animation-duration: 4s;
    }

Ou:

    animation: name duration timing-function delay iteration-count direction fill-mode;

- `animation-name`: O nome da animação a se aplicar (regra @keyframes).
- `animation-duration`: A duração da animação em segundos ou milissegundos.
- `animation-timing-function`: A função de tempo que define como a animação progride ao longo do tempo.
- `animation-delay`: O tempo de espera antes que a animação comece.
- `animation-iteration-count`: O número de vezes que a animação deve ser executada. Pode ser um número inteiro ou a palavra-chave **infinite** para executar a animação indefinidamente.
- `animation-direction`: A direção da animação. Pode ser os valores **normal**, **reverse**, **alternate**, e **alternate-reverse**.
- `animation-fill-mode`: Define o estilo do elemento antes e depois da animação. Pode ser os valores **none**, **forwards**, **backwards**, e **both**.

Para pausar uma animação, utilizar `animation-play-state: paused;`.
