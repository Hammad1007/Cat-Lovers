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

  it('Gallery when clicked takes me to the page where all the cat pictures are displayed', () => {
    cy.contains('.nav-item', 'Gallery')
    .should('be.visible')
    .click()
    cy.url()
    .should('eq', 'http://localhost:3000/gallery');
  })

  it('Contact when clicked takes me to the conatct us form page', () => {
    cy.contains('.nav-item', 'Contact')
    .should('be.visible')
    .click()
    cy.url()
    .should('eq', 'http://localhost:3000/contact');
  })

  it('Search bar is visible', () => {
    cy.get('.navbar-search-form .form-control').should('be.visible')
  })

  it('Search button is visible', () => {
    cy.get('.navbar-search-form .btn').should('be.visible')
  })

  it('Search button color is blue', () => {
    cy.get('.navbar-search-form .btn').should('be.visible').should('have.css', 'background-color', 'rgb(0, 123, 255)')
  })

  context(('Body Text'), () => {
    it('The text is visible in the body', () => {
      cy.get('main').should('be.visible')
    })
  
    it('The title text is visible', () => {
      cy.get('main').get('h1').should('be.visible')
    })
  
    it('The title text should be correct', () => {
      cy.get('main').get('h1').should('have.text', 'Welcome to Cat Lovers')
    })

    it('The quote should be visible', () => {
      cy.get('main .container-italic-quote p').should('be.visible')
    })

    it('The quote text should be correct', () => {
      cy.get('main .container-italic-quote p').should('have.text', '"When a man loves cats, I am his friend and comrade without further introduction."')
    })

    it('The name Mark Twain should be visible', () => {
      cy.get('main .container-italic-quote h3').should('be.visible')
    })

    it('The name Mark Twain should be correct', () => {
      cy.get('main .container-italic-quote h3').should('have.text', 'Mark Twain')
    })

    it('The body text should be visible', () => {
      cy.get('main .container-text-on-cats p').should('be.visible')
    })

    it('The body text should be correct', () => {

      const expectedTextNormalized = `Cats, these mysterious and graceful creatures, have long captured our hearts with their enigmatic charm and playful antics. They epitomize the essence of independence and curiosity, making them beloved companions for millions around the world. These words resonate deeply, for cats have a unique way of forging deep connections with those who appreciate their companionship. Whether they're gracefully prowling through the garden or curling up for a cozy nap, cats add a special warmth to our homes and hearts. Discover the world of feline wonder on our website and let these enchanting beings brighten your day.`;

      const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();

      cy.get('.container-text-on-cats')
      .invoke('text')
      .then((actualText) => {
        const normalizedActualText = normalizeText(actualText);
        const normalizedExpectedText = normalizeText(expectedTextNormalized);
        expect(normalizedActualText).to.equal(normalizedExpectedText);
      });
    })

  })

 
})