describe("login", () => {
  it("user can login", () => {
    // navigate to trade portal
    cy.visit("http://localhost:3000/tradeportal");
    // login
    cy.get("input[placeholder=Username]").click();
    cy.get("input[placeholder=Username]").type("test");
    cy.get("input[placeholder=Password]").click();
    cy.get("input[placeholder=Password]").type("testtest");
    // Submit login form
    cy.get("form").submit();
    // click view bike
    // cy.get(
    //   ".BikesCard_card__h1deA:nth-child(2) .BikesCard_actions__e2r4J > a"
    // ).click();
    // submit enquiry
    // cy.get(".Slug_actions__yv8N_ > a").click();
    // verify submittion
  });
});
