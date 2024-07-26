# Challenge Decodificador de Texto - Alura

Este projeto é um desafio da Alura para criar um decodificador de texto com design responsivo e funcionalidade de criptografia/descriptografia.

## Funcionalidades (em desenvolvimento)

- **Criptografia:** Codifica o texto inserido pelo usuário utilizando um algoritmo específico.
- **Descriptografia:** Decodifica o texto criptografado, revelando a mensagem original.
- **Design Responsivo:** Adapta-se a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.
- **Interface Intuitiva:** Design limpo e fácil de usar, com botões e áreas de texto bem definidas.

## Tecnologias Utilizadas

- **HTML:** Estruturação do conteúdo da página.
- **CSS:** Estilização visual, incluindo layout, cores, fontes e responsividade.
- **JavaScript:** Implementação da lógica de criptografia/descriptografia e interação com o usuário.

## Como Usar (em desenvolvimento)

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

## Próximas Etapas

- **Implementar a lógica de criptografia/descriptografia.**
- **Adicionar validação de entrada (letras minúsculas sem acento).**
- **Aprimorar o design e a responsividade.**
- **Adicionar recursos extras (ex: copiar texto criptografado).**

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
