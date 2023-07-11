# Pseudo Elementos e Pseudo Classes

## Pseudo-elementos

Iniciam-se com `::`. São usados para selecionar partes de um elemento que não existem no HTML, permitindo aplicar estilos nessas partes.

### first-letter

Seleciona a primeira letra da primeira linha.

### first-line

Seleciona a primeira linha.

### backdrop

Estiliza o plano de fundo de elementos em modo de tela cheia, como `dialog` ou `video`.

### marker

Estiliza os tópicos ou números de uma lista (`li`), ou então a flecha de um elemento (`summary`).

### placeholder

Um placeholder é uma dica para ajudar no preencimento de algum campo de formulário.

### selection

Estiliza a seleção de textos no navegador.

### file-selector-button

Usado para estilizar o botão (input de tipo file) que abre a janela de seleção de arquivos quando o usuário clica nele.

    input[type="file"]::file-selector-button {

    }

### before & after

Os pseudo-elementos ::before e ::after são pseudo-elementos CSS que permitem adicionar conteúdo antes e depois do conteúdo real de um elemento HTML.

## Psseudo-classes

Iniciam-se com `:`. São usadas para selecionar elementos em um estado especial, descrevendo esses estado especial.

### hover

Ativa estilos em um elemento quando o usuário passa o cursor do mouse sobre ele.

### active

Seleciona e estiliza o elemento que está sendo ativado pelo usuário, como um botão sendo pressionado.

### focus

A pseudo-classe `:focus` é usada para selecionar o **elemento que está em foco** no momento.

A pseudo-classe `:focus-within` é usada para selecionar um **elemento que contém outro elemento** que está **em foco**.

A pseudo-classe `:focus-visible` é usada para selecionar o **elemento que está em foco no momento** e que é **visível para o usuário**.

Diferenças:

- `:active`: Representa o estado em que o elemento está sendo ativado atualmente pelo usuário. Por exemplo, quando você clica em um botão, ele é ativado e pode mudar de cor ou tamanho para indicar que foi pressionado.
- `:focus`: Representa o estado em que o elemento está atualmente selecionado para receber entrada. Por exemplo, quando você clica em um campo de entrada de texto, ele recebe o foco e é destacado para indicar que está pronto para receber entrada.
- `:focus-visible`: É semelhante ao `:focus`, mas apenas se aplica quando o foco é visível para o usuário. Isso é útil para melhorar a acessibilidade da web, pois permite que os usuários saibam onde estão focados sem ter que navegar por todo o conteúdo da página.

### target

Representa um único elemento (o elemento alvo) com uma id correspondente ao fragmento da URL.

### enabled & disabled

As pseudo-classes CSS `:enabled` e `:disabled` são usadas para selecionar elementos que estão habilitados ou desabilitados. O elemento é considerado habilitado se puder ser ativado (selecionado, clicado, digitado etc.) ou aceitar o foco. O elemento é considerado desabilitado se não puder ser ativado ou aceitar o foco.

### link e visited

As pseudo-classes CSS `:link` e `:visited` são usadas para selecionar links dentro de um elemento. A pseudo-classe :link seleciona todos os links, incluindo os que não foram visitados. Já a pseudo-classe :visited é usada para indicar se o link em questão já foi visitado pelo usuário.

### placeholder-shown

Representa qualquer elemento `<input>` ou `<textarea>` que está atualmente exibindo texto de espaço reservado (placeholder). Quando preenchido, o estilo já não é mais aplicado.

### checked e indeterminate

 O seletor `:checked` é usado para selecionar elementos de formulário que foram marcados pelo usuário, como caixas de seleção e botões de opção. Já o seletor `:indeterminate` é usado para selecionar elementos de formulário que estão em um estado indeterminado, como caixas de seleção que não foram marcadas ou botões de opção que não foram selecionados.

### valid e invalid

A pseudo-classe `:valid` é aplicada a um elemento quando ele é considerado válido de acordo com as regras de validação definidas no HTML. Já a pseudo-classe `:invalid` é aplicada a um elemento quando ele é considerado inválido de acordo com as regras de validação definidas no HTML.

### in-range e out-of-range

As pseudo-classes `:in-range` e `:out-of-range` são usadas para selecionar elementos de entrada cujos valores estão dentro ou fora de um determinado intervalo.

### required e optional

A pseudo-classe `:required` é usada para selecionar elementos que são obrigatórios em um formulário. Já a pseudo-classe `:optional` é usada para selecionar elementos que não são obrigatórios em um formulário.

### autofill

A pseudo-classe `::autofill`/`:-webkit-autofill`/`:-moz-autofill` é usada para selecionar elementos que foram preenchidos automaticamente pelo navegador.

### root

Utilizada para representar o documento HTML, o elemento raiz da árvore de elementos.

### nth-\*, first-\* e last-\*

A pseudo-classe `:nth-child()` seleciona um ou mais elementos com base em sua posição entre um grupo de elementos-irmãos, contando a partir do primeiro. Já `:nth-last-child()` conta a partir do último elemento.

A pseudo-classe `:nth-of-type()` seleciona um ou mais elementos com base em sua posição entre um grupo de elementos-irmãos do **mesmo tipo** de elemento. Igualmente, `:nth-last-of-type()` conta a partir do último.

Sintaxe `nth-*(An+B)`: **A** é o step size, **n** é um número inteiro positivo ou zero e **B** é um offset.

Obviamente, `:first-child` e `:first-of-type` seleciona o primeiro filho ou filho do tipo, e `:last-child` e `:last-of-type` os últimos.

### only-\*

Utilizadas para selecionar elementos que são filhos únicos de seu elemento pai.

Enquanto `:only-child` seleciona um elemento que é o único filho de seu elemento pai, `:only-of-type` seleciona um elemento que é o único filho de seu tipo entre os filhos de seu pai.

### empty

Usada para selecionar elementos que não contêm nenhum filho, incluindo elementos que não têm texto, comentários ou outros elementos filhos. Útil para ocultar elementos vazios que possam causar espaçamentos indesejados.

### is

A pseudo-classe `:is()` é uma função CSS que aceita uma lista de seletores como argumento e seleciona qualquer elemento que possa ser selecionado por um dos seletores da lista.

### where

Exerce a mesma função de `:is()`, mas com uma especificade 0.

### not

Parecido com `:is()` e `:where()`, mas em negação.

### has

O seletor `:has()` é um pseudo-seletor CSS que permite selecionar elementos com base em seus descendentes. Ele é usado para selecionar um elemento que contém um ou mais elementos que correspondem ao seletor especificado.
