<h1 align="center">Challenge Decodificador de Texto - Alura</h1>

<p align="center">
Este projeto é um desafio da Alura para criar um decodificador de texto com design responsivo e funcionalidade de criptografia/descriptografia.<br/>
<br>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#aprendizado">O que aprendi?</a>
</p>

<p align="center">
  <img alt="Decodificador de Texto" src="./readme-imgs/readme-cover.jpg" width="100%">
</p>

## Funcionalidades

- **Criptografia:** Codifica o texto inserido pelo usuário utilizando um algoritmo fornecido pela Alura.
- **Descriptografia:** Decodifica o texto criptografado, revelando a mensagem original.
- **Design Responsivo:** Adapta-se a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.
- **Interface Intuitiva:** Design limpo e fácil de usar, com botões e áreas de texto bem definidas.

## Tecnologias Utilizadas

- **HTML:** Estruturação do conteúdo da página.
- **CSS:** Estilização visual, incluindo layout, cores, fontes e responsividade.
- **JavaScript:** Implementação da lógica de criptografia/descriptografia e interação com o usuário.

## Como Usar

1. **Clonar o Repositório:**

   ```bash
   git clone [https://github.com/taleshenn/decodificador-de-texto-challenge-alura.git](https://github.com/taleshenn/decodificador-de-texto-challenge-alura.git)
   ```

2. **Abrir no Navegador:**

   Abra o arquivo `index.html` em seu navegador.

3. **Criptografar/Descriptografar:**

   - Insira o texto desejado na área de texto.
   - Clique no botão "Criptografar" ou "Descriptografar".
   - O resultado será exibido na área de texto abaixo.

## Deploy

Você pode acessar e testar a aplicação completa no link abaixo:

[Link para o Deploy](https://decodificador-de-texto-challenge-alura.vercel.app/)

## Branch `refatoracao-css-modular`

### O que foi feito

O código CSS foi dividido em módulos para melhorar a organização e facilitar a manutenção do projeto. Agora, cada aspecto do estilo (base, layout, componentes, responsividade) possui seu próprio arquivo.

### Por que foi feito

- **Organização:** Código mais estruturado e fácil de navegar.
- **Legibilidade:** Propósito claro para cada arquivo CSS.
- **Reutilização:** Componentes com estilos próprios, facilitando o reúso.
- **Manutenção:** Mudanças mais seguras e isoladas por componente/funcionalidade.
- **Escalabilidade:** Adição de recursos sem afetar o código existente.

### Estrutura dos Módulos

- `base.css`: Estilos básicos (reset, tipografia).
- `componentes.css`: Estilos de componentes reutilizáveis (botões, formulários).
- `layout.css`: Layout da página (grid, flexbox).
- `responsivo.css`: Media queries para diferentes telas.
- `style.css`: Importa os outros módulos.

## Branch `feat/criptografar-texto`

### O que foi feito

- `criptografia.js` exporta as funções que fazem a criptografia e descriptografia dos textos fornecidos nos campos criados em html.
- `interface.js` importa o criptografia.js e faz as iterações DOM.
- `main.js` ponto de entrada principal da aplicação. Ele importa os outros módulos (criptografia.js e interface.js) e inicia a aplicação.

## Aprendizado

Além das experiências acima citadas o que mais me agregou nesse projeto foi a prática com DOM podendo interligar as funcionalidades Javascript com a estrutura do HTML.

Também o uso de componentes como um recurso importante para a arquitetura dos arquivos gerando uma melhor reusabilidade dos códigos.

Em CSS pude experimentar com variáveis e formas de criar semânticas ao dar nomes aos identificadores.

---

## Feito com ♥ por 📩 [Tales Henn ](mailto:contato@taleshenn.com.br)
