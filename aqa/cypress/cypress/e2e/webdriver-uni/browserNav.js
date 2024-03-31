/// <reference types="cypress" />

describe("test nav in browser", () => {
  it("Confirm links redirect to the correct page", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#to-do-list").invoke("removeAttr", "target").click();
    cy.url().should("include", "To-Do-List");
    cy.get("input").type("Clean room").type("{enter}");

    cy.get("ul li").each(($el) => {
      const itemText = $el.text().trim();
      if (itemText === "Clean room") {
        cy.wrap($el).trigger("mouseover");
        cy.wrap($el).find(".fa-trash").click();
      }
    });
    if (cy.get("ul li").its("length").should("be.gt", 0)) {
      cy.get("ul li").each(($el) => {
        cy.wrap($el).trigger("mouseover");
        cy.wrap($el).find(".fa-trash").click();
      });
    }
    cy.go("back");
  });
});
