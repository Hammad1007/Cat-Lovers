describe('Cat-Lovers Project', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('Home Page', () => {
    it('Opens the home page', () => {
    
    })
  
    it('Background color is white', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
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
  
    it('CatLovers when clicked redirects me to the same page', () => {
      cy.contains('.navbar-brand', 'CatLovers').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/');
    })
  
    it('Home when clicked redirects me to the same page', () => {
      cy.contains('.nav-item', 'Home').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/');
    })
  
    it('Gallery when clicked takes me to the page where all the cat pictures are displayed', () => {
      cy.contains('.nav-item', 'Gallery').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/gallery');
    })

    it('Information when clicked takes me to a page where cat information is available', () => {
      cy.contains('.nav-item', 'Information').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/cats');
    })
  
    it('Contact when clicked takes me to the conatct us form page', () => {
      cy.contains('.nav-item', 'Contact').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/contact');
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
  
    // We can test for the text visibility and its correctness in a single test as well. If text is visible, then check for its correctness at the same time.
    // However, to make things easy, we have made separate tests for these two features
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
  
      // Cypress checks for empty line spaces, whie spaces as well. In order to check for the text we need to trim the extra white spaces and line spaces to make it more 
      // authentic and run our test seamlessly
      it('The body text should be correct', () => {
  
        const expectedTextNormalized = `Cats, these mysterious and graceful creatures, have long captured our hearts with their enigmatic charm and playful antics. They epitomize the essence of independence and curiosity, making them beloved companions for millions around the world. These words resonate deeply, for cats have a unique way of forging deep connections with those who appreciate their companionship. Whether they're gracefully prowling through the garden or curling up for a cozy nap, cats add a special warmth to our homes and hearts. Discover the world of feline wonder on our website and let these enchanting beings brighten your day.`;
  
        const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();   // trim any white spaces or line spaces
  
        cy.get('.container-text-on-cats')
        .invoke('text')
        .then((actualText) => {
          const normalizedActualText = normalizeText(actualText);
          const normalizedExpectedText = normalizeText(expectedTextNormalized);
          expect(normalizedActualText).to.equal(normalizedExpectedText);
        });
      })

      context('Footer', () => {
        it('Footer is visible', () => {
          cy.get('footer').should('be.visible')
        })

        it('Footer text is visible', () => {
          cy.get('footer p').should('be.visible')
        })

      })
  
    })
  })

  context('Contact Us Page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/contact')
    })

    it('Opens the contact us page', () => {
      
    })

    context('Contact Form', () => {

      it('Background color is white', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
      })

      it('Contact Form is visible', () => {
        cy.get('main .form-container').should('be.visible')
      })

      it('Contact Us Text is Visible', () => {
        cy.get('main .form-container h1').should('be.visible')
      })

      it('Contact Us Text is Correct', () => {
        cy.get('main .form-container h1').should('have.text', 'Contact Us')
      })

      // to check for any textfields wrapped in the tag label, this is how we test them in cypress
      it('Name heading is visible', () => {
        cy.get('label[for="name"]').should('be.visible')
      })

      it('Name heading is correct', () => {
        cy.get('label[for="name"]').should('have.text', 'Name')
      })

      // for class, we use the syntax '.class-name', for id, we use the syntax '#id-name'
      it('Name text field is visible', () => {
        cy.get('.form-group #name').should('be.visible')    // .form-group is class and #name is an id in the class .form-group
      })  // first it looks for .form-group class and then an id #name in the class .form-group

      it('Name text field takes input', () => {
        const inputText = 'Hammad Rashid'
        cy.get('.form-group #name').type(inputText).should('have.value', inputText)
      })

      it('Email heading is visible', () => {
        cy.get('label[for="email"]').should('be.visible')
      })

      it('Email heading is correct', () => {
        cy.get('label[for="email"]').should('have.text', 'Email')
      })

      it('Email text field is visible', () => {
        cy.get('.form-group #email').should('be.visible')
      })

      it('Email text field takes input', () => {
        const inputText = 'hammadrashid2001@gmail.com'
        cy.get('.form-group #email').type(inputText).should('have.value', inputText)
      })

      it('Message heading is visible', () => {
        cy.get('label[for="message"]').should('be.visible')
      })

      it('Message heading is correct', () => {
        cy.get('label[for="message"]').should('have.text', 'Message')
      })

      it('Message text field is visible', () => {
        cy.get('.form-group #email').should('be.visible')
      })

      it('Message text field takes input', () => {
        const inputText = 'Hello, this is me a random user on the internet wandering here and there!'
        cy.get('.form-group #message').type(inputText).should('have.value', inputText)
      })

      it('Submit button is visible', () => {
        cy.get('.contact-form .btn').should('be.visible')
      })

      it('Submit button is colored blue', () => {
        cy.get('.contact-form .btn').should('be.visible').should('have.css', 'background-color', 'rgb(0, 123, 255)')
      })

      it('Submit button has the text Submit in it and it is visible', () => {
        cy.get('.contact-form .btn').should('be.visible').should('have.text', 'Submit')
      })

    })

    context('Footer', () => {
      it('Footer is visible', () => {
        cy.get('footer').should('be.visible')
      })

      it('Footer text is visible', () => {
        cy.get('footer p').should('be.visible')
      })

    })
  })

  context('Gallery Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/gallery')
    })

    it('Opens the gallery page', () => {
      
    })

    it('Background color is white', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })

    // the tags are tested without any preceding character, such as h1, h2, h4, div, main, header etc
    it('Gallery word is visible', () => {
      cy.get('main h1').should('be.visible')
    })

    it('Gallery word is correct', () => {
      cy.get('main h1').should('have.text', 'Gallery')
    })

    it('There are images on the page', () => {
      cy.get('.container .row').should('be.visible')
    })

    it('Count images on the screen', () => {
      cy.get('.container .card').should('have.length', 21).each(($img) => {
        cy.wrap($img).should('be.visible')
      });
    })

    it('Count the image rows on the screen', () => {
      cy.get('.container .row') 
      .should('have.length', 7)   // checks for the number of rows in the container
      .each(($img) => {
        cy.wrap($img).should('be.visible'); 
      });
    })
  })

  context('Information', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/cats')
    })

    it('Opens the information page', () => {
      
    })

    it('Background color is white', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })

    it('Screen is visible', () => {
      cy.get('body').should('be.visible')
    })

    it('Hottest Pick text is visible', () => {
      cy.get('.container h1').should('be.visible')
    })

    it('Hottest Picks text is correct', () => {
      cy.get('.container h1').should('have.text', 'Hottest Picks!')
    })

    it('There are 2 rows on the page', () => {
      cy.get('.container .row').should('have.length', 2).should('be.visible')
    })

    it('There are 6 cards on the page', () => {
      cy.get('.container .card').should('have.length', 6).each(($img) => {
        cy.wrap($img).should('be.visible')
      });
    })

    context('Cards', () => {
      it('Persian Cats', () => {
        // .first takes the first element in a set matched
        // .within checks for that element selected in the set present
        cy.get('.row .col-md-4.mb-4').first().within(() => {
          cy.get('img').should('be.visible')
          cy.get('.card-title').should('contain', 'Persian Cats');
          cy.get('.btn-primary').click();
        });
      })

      it('British Short Hair', () => {
        cy.get('.row .col-md-4.mb-4').eq(1).within(() => {
          cy.get('img').should('be.visible')
          cy.get('.card-title').should('contain', 'British Short Hair');
          cy.get('.btn-primary').click();
        });
      })

      it('Ragdoll', () => {
        cy.get('.row .col-md-4.mb-4').eq(2).within(() => {
          cy.get('img').should('be.visible')
          cy.get('.card-title').should('contain', 'Ragdoll');
          cy.get('.btn-primary').click();
        });
      })

      it('Scottish Fold', () => {
        cy.get('.row .col-md-4.mb-4').eq(3).within(() => {
          cy.get('img').should('be.visible')
          cy.get('.card-title').should('contain', 'Scottish Fold');
          cy.get('.btn-primary').click();
        });
      })

      it('Chartreux', () => {
        cy.get('.row .col-md-4.mb-4').eq(4).within(() => {
          cy.get('img').should('be.visible')
          cy.get('.card-title').should('contain', 'Chartreux');
          cy.get('.btn-primary').click();
        });
      })

      it('British Long Hair', () => {
        cy.get('.row .col-md-4.mb-4').last().within(() => { // can replace last() with eq(5)
          cy.get('img').should('be.visible')
          cy.get('.card-title').should('contain', 'British Long Hair');
          cy.get('.btn-primary').click();
        });
      })
    })
  })

  context('Cats', () => {
    it('Cats when clicked displays a dropdown', () => {
      cy.get('.nav-link.dropdown-toggle').click()
      cy.get('.dropdown-menu').should('be.visible')
    })

    it('Cats when clicked displays the correct content in the dropdown', () => {
      cy.get('.nav-link.dropdown-toggle').click() 

      cy.get('.dropdown-menu').should('be.visible') 
    
      cy.get('.dropdown-menu').contains('.dropdown-item', 'Persian Cats').should('be.visible')
      cy.get('.dropdown-menu').contains('.dropdown-item', 'British Short Hair').should('be.visible')
      cy.get('.dropdown-menu').contains('.dropdown-item', 'Ragdoll').should('be.visible')
      cy.get('.dropdown-menu').contains('.dropdown-item', 'Scottish Fold').should('be.visible')
      cy.get('.dropdown-menu').contains('.dropdown-item', 'Chartreux').should('be.visible')
      cy.get('.dropdown-menu').contains('.dropdown-item', 'British Long Hair').should('be.visible')
    })

    context('Dropdown', () => {
      beforeEach(() => {
        cy.get('.nav-link.dropdown-toggle').click() 
        cy.get('.dropdown-menu').should('be.visible')
      })

      it('Persian Cats', () => {
        cy.get('.dropdown-menu').contains('.dropdown-item', 'Persian Cats').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/persian')
      })

      it('British Short Hair', () => {
        cy.get('.dropdown-menu').contains('.dropdown-item', 'British Short Hair').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/british')
      })

      it('Ragdoll', () => {
        cy.get('.dropdown-menu').contains('.dropdown-item', 'Ragdoll').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/ragdoll')
      })

      it('Scottish Fold', () => {
        cy.get('.dropdown-menu').contains('.dropdown-item', 'Scottish Fold').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/scottish')
      })

      it('Chartreux', () => {
        cy.get('.dropdown-menu').contains('.dropdown-item', 'Chartreux').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/chartreux')
      })

      it('British Long Hair', () => {
        cy.get('.dropdown-menu').contains('.dropdown-item', 'British Long Hair').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/britishlong')
      })

    })

  })
 
})

// There are 74 tests for this website. However, these can be reduced or increased according to the requirements and need of the hour. 