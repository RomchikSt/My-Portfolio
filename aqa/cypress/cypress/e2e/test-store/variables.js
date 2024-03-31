/// <reference types="cypress" />

describe("Verifu variables, cypress and jquery comands", () => {
  it("Navigating to spec pord page", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });
});
