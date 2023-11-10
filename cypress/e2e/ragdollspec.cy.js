describe('ragdoll-cats', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/cats');
      cy.get('button').click();
      cy.visit('http://localhost:3000/ragdoll.html');
    })
})  
