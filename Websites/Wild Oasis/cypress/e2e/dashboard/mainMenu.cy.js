/// <reference types="cypress" />

describe("Check left menu", () => {
  it("Check left menu", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get(".sc-eLSjS").click();

    const menuItems = ["Home", "Bookings", "Cabins", "Users", "Settings"];

    cy.get(".sc-gFWRCe")
      .find("li")
      .should("have.length", menuItems.length)
      .each((item, index) => {
        cy.wrap(item).should("contain", menuItems[index]);
      });
  });
});
