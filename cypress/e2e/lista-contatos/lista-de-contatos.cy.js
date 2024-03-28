/// <reference types="cypress" />

describe("Testes para a agenda de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app");
    });

    it("Deve renderizar 3 contatos", () => {
        cy.get(".contato").should("have.length", 3);
        
        cy.screenshot('01-lista-renderizada')
    });

    it("Deve adicionar um novo contato", () => {
        cy.get('input[type="text"]').type("Winicius Barcellos");
        cy.get('input[type="email"]').type("winicius@teste.com");
        cy.get('input[type="tel"]').type("(27) 9876-54321");
        cy.get(".adicionar").click();

        cy.get(".contato").should("have.length", 4);

        cy.screenshot('02-lista-renderizada-com-o-novo-contato')
    });

    it("Deve editar o novo contato adicionado acima", () => {
        cy.get(".edit").last().click();
        cy.get('input[type="text"]').clear().type("Winicius Barcellos Nunes");
        cy.get(".alterar").click();

        cy.get("body").contains("Winicius Barcellos Nunes");

        cy.screenshot('03-lista-renderizada-com-o-novo-contato-editado')
    });

    it("Deve deletar o novo contato adiconado acima", () => {
        cy.get(".delete").last().click();

        cy.get(".contato").should("have.length", 3);

        cy.screenshot('04-lista-renderizada-sem-o-novo-contato')
    });
});
