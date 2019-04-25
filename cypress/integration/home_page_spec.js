describe('Clean Home Page', function() {
  it('successfully loads with navigation, header, and form', function() {
    cy.visit('/')

    cy.get('.hero-wrapper').within((heroWrapper) => {
      cy.contains('.navbar-custom', 'About')
      cy.get('.ickly-header')
    })

    cy.get('form').within((el) => {
      cy.get('input:first')
    })
  })

  it('does not render the inspections component', function() {
    cy.get('.business-detail')
    cy.get('[data-test=inspections]').should('not.exist')
  })
})

describe('Form User Interactions', function() {
  it('form focuses and clears on click, displays dropdown', function() {
    cy.get('form').within((el) => {
      cy.get('input:first')
        .click()
        .type('demi')
        .focused()
       cy.get('.dropdown-menu').should('exist')
        .get('li:first')
       cy.get('input:first')
        .click()
        .focused()
       cy.get('.dropdown-menu').should('not.exist')
    })
  })
})
