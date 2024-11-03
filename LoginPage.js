class LoginPage {
    visit() {
        cy.visit('https://demoblaze.com/')
    }

    openLoginModal() {
        cy.get('#login2').click();
    }

    enterUsername(username) {
        cy.get('#loginusername').type(username);
    }

    enterPassword(password) {
        cy.get('#loginpassword').type(password);
    }

    submitLogin() {
        cy.get('button[onclick="logIn()"]').click();
    }
}

export default LoginPage;
