/// <reference types="cypress" />

describe("test Login Form", () => {
  it("Incorect Email", () => {
    cy.visit("http://localhost:5174/");
    cy.get("#email").type("123");
    cy.url().should("include", "login");
  });

  it("Incorect Pass", () => {
    cy.visit("http://localhost:5174/");
    cy.get("#password").type("123");
    cy.url().should("include", "login");
  });

  it("positive scenario", () => {
    cy.visit("http://localhost:5174/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
  });

  it("Logout", () => {
    cy.visit("http://localhost:5174/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
    cy.get(":nth-child(3) > .sc-GFXod").click();
    cy.url().should("include", "login");
  });
});
