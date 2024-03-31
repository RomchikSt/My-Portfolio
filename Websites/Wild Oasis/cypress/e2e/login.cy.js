/// <reference types="cypress" />

describe("test Login Form", () => {
  it("Incorect Email", () => {
    cy.visit("https://rstp-wild-oasis.netlify.app/");
    cy.get("#email").type("123");
    cy.url().should("include", "login");
  });

  it("Incorect Pass", () => {
    cy.visit("https://rstp-wild-oasis.netlify.app/");
    cy.get("#password").type("123");
    cy.url().should("include", "login");
  });

  it("positive scenario", () => {
    cy.visit("https://rstp-wild-oasis.netlify.app/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
  });
});
