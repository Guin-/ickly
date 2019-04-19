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


