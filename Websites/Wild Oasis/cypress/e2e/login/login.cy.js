/// <reference types="cypress" />

describe("test Login Form", () => {
  it("Incorect Email", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get("#email").type("123");
  });

  it("Incorect Pass", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get("#password").type("123");
  });

  it("Positive Scenario", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
  });

  it("Correct Email with Uppercase", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get("#email").type("tEst@test.com");
  });

  it("Correct Pass with Uppercase", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get("#email").type("teSt@test.com");
  });

  it("Logout", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
    cy.get(":nth-child(3) > .sc-GFXod").click();
    cy.url().should("include", "login");
  });
});
