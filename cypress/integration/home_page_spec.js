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

  it('has expected state on load', () => {
    cy.window().its('store').invoke('getState').should('deep.equal', {
      business: {
        isFetching: false,
        selectedBusiness: {},
        error: null
      },
      inspections: {
        inspections: [],
        error: null
      }
    })
  })

  it('can navigate between pages', function() {
    cy.get('.nav-link:first')
      .click()
    cy.get('.navbar-brand')
      .click()
  })

})

describe('Form User Interactions', function() {
  it('form focuses and clears on click, displays dropdown', function() {
    cy.get('form').within((el) => {
      cy.get('input:first')
        .click()
        .type('demi-monde')
       cy.get('.dropdown-menu').should('exist')
        .get('li:first')
       cy.get('input:first')
        .click()
        .focused()
       cy.get('.dropdown-menu').should('not.exist')
    })
  })
})

