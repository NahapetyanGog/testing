import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';


describe('Add to Cart Test', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const cartPage = new CartPage();

    it('should add a product to cart and verify its presence', () => {
        loginPage.visit('https://demoblaze.com/'); 
                loginPage.openLoginModal();
        loginPage.enterUsername('gohar'); 
        loginPage.enterPassword('123456'); 
        loginPage.submitLogin();
                homePage.addProductToCart('Samsung galaxy s6'); 
                cy.on('window:alert', (text) => {
            expect(text).to.equal('Product added'); 
        });
                cartPage.navigateToCart();
        cartPage.verifyProductInCart('Samsung galaxy s6');
    });
});
