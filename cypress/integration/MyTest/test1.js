/// <reference types="Cypress" />

describe('My first test', () => {
  it('Navigates to Formy Project website', () => {
    cy.visit('http://formy-project.herokuapp.com/')
    cy.url().should('eq', 'http://formy-project.herokuapp.com/')
  })

  it('Completes a web form', () => {
    cy.get('.jumbotron-fluid').contains('Complete Web Form').click()
    cy.get('input#first-name').type('James')
    cy.get('#last-name').type('Yu')
    cy.get('[placeholder="Enter your job title"]').type('Developer')

    cy.get('#radio-button-2').check()
    cy.get('input[type="checkbox"]').each(element => {
      element.click()
    })
    cy.get('#checkbox-2').uncheck()
    cy.get('select#select-menu').select("10+")

    cy.get('#datepicker').type("08/09/2021")
    cy.get('a').contains('Submit').click()

    cy.get('div.alert.alert-success').should('have.text', '\n  The form was successfully submitted!\n')
  })
})