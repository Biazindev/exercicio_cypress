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
    })

    it('deve alterar o nome para Gian claude van damme', () =>{
        cy.get('button.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('[type="text"]').type('Gian claude van damme')
        cy.get('button.alterar').first().click()
    })

    it('Deve apagar os segundo nome da lista', () => {
        cy.get('button.delete').eq(1).click();
    })
})