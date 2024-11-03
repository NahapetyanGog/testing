import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Login Test', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    it('should successfully log in and verify UI changes', () => {
        loginPage.visit();
        loginPage.openLoginModal();
        loginPage.enterUsername('gohar'); 
        loginPage.enterPassword('123456'); 
        loginPage.submitLogin();
        homePage.verifyWelcomeMessage('gohar'); 
        homePage.verifyLoginOptionsVisible(); 
        homePage.verifyLoginModalNotVisible(); 
        homePage.addToCart('Samsung galaxy s6');

    });
});
