describe('Cat-Lovers Home Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')

  })

  it('Opens the home page', () => {
    
  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('Navbar is visible', () => {
    cy.get('nav').should('be.visible')
  })

  it('CatLovers title is visible in the Navbar', () => {
    cy.contains('.navbar', 'CatLovers').should('be.visible');
  })

  // it('CatLovers text can be hover over', () => {
  //   cy.get('.navbar-brand').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  //   .trigger('mouseover').should('have.css', 'color', 'rgb(0, 123, 255)')
  // })

  it('CatLovers when clicked redirects me to the same page', () => {
    cy.contains('.navbar-brand', 'CatLovers')
    .should('be.visible')
    .click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('Home when clicked redirects me to the same page', () => {
    cy.contains('.nav-item', 'Home')
    .should('be.visible')
    .click()
    cy.url()
    .should('eq', 'http://localhost:3000/');
  })

})