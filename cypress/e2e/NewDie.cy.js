require("cypress-xpath");
it("Verify if a user is able to Click on NewDie Form", () => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
    cy.get('#button').click()
    cy.get('#name').type("PB-101");
    cy.get('#rfid').type("55");
    cy.get('#code').type("5");
    cy.get('#lifetimevalue').type("455000");
    //cy.get('#css-19bb58m" data-value=""').click().type("2023-03-07");
    //cy.get('#lastMaintained').click();
    //Then Clicks on current date. 
    cy.xpath("//input[@id='lastMaintained']").click();
    cy.get('.css-19bb58m').click();
    cy.get('#react-select-2-option-0').click();
    cy.get('#strokesSinceLastPM').type("4000");
    cy.get('#maintenanceForEvery').type("450");
    cy.get('#maintenanceAtEveryDays').type("60");
   // cy.get(':nth-child(2) > .MuiInputBase-root > #filled-size-small').type("xyz");
    //cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #filled-size-small').type("Operator");
    cy.get('[type="submit"]').click();
  });
