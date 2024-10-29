describe('E-commerce Purchase Flow Test', () => {
  it('Navigates, selects Broccoli, adds to cart, applies promo code, and places order', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
            cy.get('.search-keyword').type('Brocolli');
      cy.wait(1000); 
      cy.get('.product:visible').should('have.length', 1);
      cy.get('.product:visible').contains('Brocolli').should('be.visible');
            cy.get('.increment').click().click();
      cy.get('.quantity').should('have.value', '3');
            cy.contains('ADD TO CART').click();
      cy.contains('ADDED').should('be.visible');
            cy.get('.cart-icon > img').click();
            cy.contains('Brocolli').should('be.visible');
            cy.contains('PROCEED TO CHECKOUT').click();
            cy.get('.product-name').contains('Brocolli').should('be.visible');
            cy.get('.promoCode').type('test');
      cy.contains('Apply').click();
            cy.contains('Invalid code ..!').should('be.visible');
            cy.contains('Place Order').click();
            cy.get('select').select('India');
            cy.get('.chkAgree').check();
            cy.contains('Proceed').click();
            cy.contains('Thank you, your order has been placed successfully').should('be.visible');
  });
});
