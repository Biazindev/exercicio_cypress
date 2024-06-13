/// <reference types="cypress" />

describe('testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')

    })

    it('Deve incluir nome: Tiago Biazin', () => {
        cy.get('[type="text"]').type('Tiago Biazin')
        cy.get('[type="email"]').type('tiago@testes.com')
        cy.get('[type="tel"]').type('(17)98171-6648')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > div').should('have.length', 4)
        cy.screenshot('tela incluindo Cadastro: Tiago Biazin')

    })

    it('deve alterar o nome para Gian claude van damme', () =>{
        cy.get('button.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('[type="text"]').type('Gian claude van damme')
        cy.get('button.alterar').first().click()
        cy.screenshot('tela alterando para Gian claude van damme')

    })

    it('Deve apagar os segundo nome da lista', () => {
        cy.get('button.delete').eq(1).click();
        cy.screenshot('tela apagando o segundo da lista')
    })
})