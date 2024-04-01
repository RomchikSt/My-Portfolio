/// <reference types="cypress" />

describe("test Dark Mode", () => {
  it("test theme", () => {
    cy.visit("http://localhost:5174/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");

    cy.get("html").then(($html) => {
      if ($html.hasClass("light-mode")) {
        cy.get(":nth-child(2) > .sc-GFXod").click();
        cy.get("html").should("have.class", "dark-mode");
      } else {
        cy.get(":nth-child(2) > .sc-GFXod").click();
        cy.get("html").should("have.class", "light-mode");
      }
    });
  });
});
