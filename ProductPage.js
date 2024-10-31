class ProductPage {
    visit() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    }

    searchProduct(productName) {
        cy.get('.search-keyword').type(productName);
        cy.get('.products').should('contain', productName);
    }

    assertProductVisible(productName) {
        cy.get('.products').find('.product').should('have.length', 1);
        cy.get('.products').find('.product').contains(productName).should('be.visible');
    }

    addToCart(productName) {
        cy.get('.products').contains(productName).find('.increment').click().click();
        cy.get('.products').contains(productName).find('.quantity').should('have.value', '3');
        cy.get('.products').contains(productName).find('button').click();
    }

    assertAddedToCart() {
        cy.get('.products').contains('Added').should('be.visible');
    }

    openCart() {
        cy.get('.cart-icon').click();
    }

    assertProductInCart(productName) {
        cy.get('.cart-preview').should('contain', productName);
    }

    proceedToCheckout() {
        cy.get('.cart-preview').contains('PROCEED TO CHECKOUT').click();
    }

    assertProductInCheckout(productName) {
        cy.get('.product-name').should('contain', productName);
    }

    applyPromoCode(code) {
        cy.get('.promoCode').type(code);
        cy.get('.promoBtn').click();
    }

    assertInvalidPromoCode() {
        cy.get('.promoInfo').should('contain', 'Invalid code ..!');
    }

    placeOrder() {
        cy.get('.placebtn').click();
    }

    selectCountry(country) {
        cy.get('#country').type(country);
        cy.get('.suggestions > li').contains(country).click();
    }

    agreeToTerms() {
        cy.get('#checkbox').check();
    }

    proceed() {
        cy.get('.btn.btn-success').click();
    }

    assertThankYouMessage() {
        cy.get('.hero').should('contain', 'Thank you for the order.');
    }
}

export default new ProductPage();
