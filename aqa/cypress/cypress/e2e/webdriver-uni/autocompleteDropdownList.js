/// <reference types="cypress" />

describe("Testing Autocomplete dropdown list", () => {
  it("Select specific product", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *").each(($el) => {
      if ($el.text() === "Avacado") {
        $el.trigger("click");
        cy.get("#submit-button").click();
        cy.url().should("include", "Avacado");
      }
    });
  });
});
