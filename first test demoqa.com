describe('Web Tables Test', () => {
  it('should add a new user to the web table', () => {
    cy.visit('https://demoqa.com/webtables');
        cy.get('#addNewRecordButton').click();
    
    cy.get('#firstName-wrapper').type('Gohar');
    cy.get('#lastName-wrapper').type('Nahapetyan');
    cy.get('#userEmail-wrapper').type('gohar@example.com');
    cy.get('#age-wrapper').type('18');
    cy.get('#salary-wrapper').type('50000');
    cy.get('#department-wrapper').type('programming');
        cy.get('#submit').click();
        cy.get('.rt-tbody')
      .contains('Gohar')
      .should('be.visible');
    cy.get('.rt-tbody')
      .contains('Nahapetyan')
      .should('be.visible');
    cy.get('.rt-tbody')
      .contains('gohar@example.com')
      .should('be.visible');
  });
});
