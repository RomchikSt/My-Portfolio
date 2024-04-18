/// <reference types="cypress" />

describe("Create new user", () => {
  it("Create new user", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get(".sc-eLSjS").click();
    cy.get(":nth-child(4) > .sc-clcPSL").click();
    cy.url().should("include", "users");

    cy.get(":nth-child(1) > .sc-bCnriq").click().type("AutoTest");
    cy.get(":nth-child(2) > .sc-bCnriq").click().type("yevik24737@rartg.com");
    cy.get(":nth-child(3) > .sc-bCnriq").click().type("AutoTest");
    cy.get(":nth-child(4) > .sc-bCnriq").click().type("AutoTest");
    cy.get(".hZXBpk").click();

    cy.get(":nth-child(3) > .sc-GFXod").click();

    cy.get("#email").clear().type("yevik24737@rartg.com");
    cy.get("#password").clear().type("AutoTest");
    cy.get(".sc-eLSjS").click();

    cy.url().should("include", "login");
  });
});
