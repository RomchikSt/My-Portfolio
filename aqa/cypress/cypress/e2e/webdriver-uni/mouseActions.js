/// <reference types="cypress" />

describe("mouse actions tests", () => {
  it("Drag and drop", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    cy.get("#droppable > p").should("have.text", "Dropped!");
  });

  it("Double click", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#double-click").dblclick();
    cy.get("#double-click").should(
      "have.css",
      "background-color",
      "rgb(147, 203, 90)"
    );
  });

  it("Click and hold", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .should("have.css", "background-color", "rgb(0, 255, 0)");
  });
});
