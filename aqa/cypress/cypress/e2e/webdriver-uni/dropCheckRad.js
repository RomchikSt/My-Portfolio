/// <reference types="cypress" />

describe("Checked dropdown menu, checkboxes, radio buttons", () => {
  it("Checkboxes test", () => {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("#checkboxes > :nth-child(3) > input").as("option3");
    cy.get("@option3").check().should("be.checked");
    cy.get("@option3")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "option-2");
  });

  it("Multiple checkboxes test", () => {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2"])
      .should("be.checked");
  });

  it("Radiobuttons test", () => {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("#radio-buttons").as("radioButtons");
    cy.get("@radioButtons")
      .find("input[type='radio']")
      .first()
      .check()
      .should("be.checked");
    cy.get("@radioButtons")
      .find("input[type='radio']")
      .eq(1)
      .check()
      .should("be.checked")
      .and("have.value", "blue");
  });

  it.only("Dropdown menu test", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#dropdowm-menu-1").select("Python").should("have.value", "python");
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
  });
});
