describe("login", () => {
  it("user can login", () => {
    // navigate to trade portal
    cy.visit("http://localhost:3001/tradeportal");
    // login
    cy.get("input[placeholder=Username]").click();
    cy.get("input[placeholder=Username]").type("test");
    cy.get("input[placeholder=Password]").click();
    cy.get("input[placeholder=Password]").type("testtest");
    // Submit login form
    cy.get("form").submit();
    // click view bike
    cy.get(".BikesCard_actions__e2r4J > a").first().click();
    // submit enquiry
    cy.get("div").contains("Enquire Now").click();
    // verify submittion
    // ToDo: Once enquiry form is in place, add test to check for sent message.
  });
});
