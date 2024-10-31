import ProductPage from './ProductPage';

describe('E-commerce Checkout Process', () => {
    it('should complete the checkout process with a product', () => {
        ProductPage.visit();
        ProductPage.searchProduct('Brocolli');
        ProductPage.assertProductVisible('Brocolli');
        ProductPage.addToCart('Brocolli');
        ProductPage.assertAddedToCart();
        ProductPage.openCart();
        ProductPage.assertProductInCart('Brocolli');
        ProductPage.proceedToCheckout();
        ProductPage.assertProductInCheckout('Brocolli');
        ProductPage.applyPromoCode('test');
        ProductPage.assertInvalidPromoCode();
        ProductPage.placeOrder();
        ProductPage.selectCountry('India');
        ProductPage.agreeToTerms();
        ProductPage.proceed();
        ProductPage.assertThankYouMessage();
    });
});
