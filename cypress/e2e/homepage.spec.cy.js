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
  //   cy.get('.navbar', 'CatLovers').should('be')
  // })
})