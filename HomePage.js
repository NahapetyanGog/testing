class HomePage {
    verifyWelcomeMessage(username) {
        cy.get('#nameofuser').should('contain.text', `Welcome ${username}`);
    }

    verifyLoginOptionsVisible() {
        cy.get('#logout2').should('be.visible');
    }

    verifyLoginModalNotVisible() {
        cy.get('#logInModal').should('not.be.visible');
    }

    addProductToCart(productName) {
        cy.get('productName')
            .contains(productName)
            .click();
            cy.get('.btn-success').click();    }
}

export default HomePage;
