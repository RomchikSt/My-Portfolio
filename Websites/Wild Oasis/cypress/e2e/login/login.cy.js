/// <reference types="cypress" />

describe("test Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get(".sc-ftLKQv").should("contain", "Log in to your account");
    cy.get(".sc-eLSjS")
      .should("contain", "Login")
      .and("have.css", "background-color", "rgb(79, 70, 229)");
  });

  it.only("Incorect Email", () => {
    cy.get("#email").type("123");
    cy.url().should("include", "login");
  });

  it("Incorect Pass", () => {
    cy.get("#password").type("123");
    cy.url().should("include", "login");
  });

  it("Positive Scenario", () => {
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
  });

  it("Correct Email with Uppercase", () => {
    cy.get("#email").type("tEst@test.com");
  });

  it("Correct Pass with Uppercase", () => {
    cy.get("#email").type("teSt@test.com");
  });

  it("Logout", () => {
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.url().should("include", "dashboard");
    cy.get(":nth-child(3) > .sc-GFXod").click();
    cy.url().should("include", "login");
  });
});
