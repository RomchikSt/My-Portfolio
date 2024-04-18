/// <reference types="cypress" />

describe("data table tests", () => {
  it("", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#data-table")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
