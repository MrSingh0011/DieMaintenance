require("cypress-xpath");

describe("Die Maintenance", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
  });

  it("Verify if a user is able to click all the table header tab", () => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
    cy.xpath("//div[normalize-space()='Maintenance']").click();//maintenance
    cy.wait(1000);
    cy.xpath("//div[normalize-space()='Quality Block']").click();//quality block
  });
});
