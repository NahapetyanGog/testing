class CartPage {
    navigateToCart() {
        cy.get('#cartur').click();
    }

    verifyProductInCart(productName) {
        cy.get('.success').parent().should('contain.text', productName);
    }
}

export default CartPage;
