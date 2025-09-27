// Utilize o cy.visit() ou o baseURL para acessar a aplicação.

// Utilize o cy.resquest() para requisições para a api

// Utilize o cy.contains() para identificar um elemento que contem texto, o .click() para clicar

// Utilize o cy.get() para identificar um seletor e realizar ação de .type() inserir dados, o .click() para clicar

describe("Usuário e login listar", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve realizar login com sucesso com os tipos de usuários', () => {
      const users = ['usuario', 'motorista', 'mecanico', 'chefe', 'secretario', 'admin'];

      for(let user in users) {
        cy.login(users[user], 'ABCDabcd1234')
        cy.getByData('button-cadastrar').click();
        cy.location('pathname').should('eq', '/inicio');
        cy.getByData('side-bar-header-perfil').click();
        cy.get('a').contains('Sair').click()
      }

    });

    // Validação de campos obrigatórios no login e login incorreto
    it('Deve validar campos obrigatórios do login', () => {
      // Implementação
    });

    // Listagem de usuários com verificação de paginação e consistência com a API
    it('Deve listar usuários com sucesso, confirmando paginação e dados comparando com a API', () => {
      // Implementação
    });
    // Para ambos os casos de teste;
    // Com base no que o caso de teste pede, implemente corretamente.
})
