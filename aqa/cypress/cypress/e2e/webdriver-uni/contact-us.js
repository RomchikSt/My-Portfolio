/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it.only("Should be redirect to contact us form", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    /* cy.get("#contact-us").invoke("removeAttr", "target").click(); */
    cy.get("#contact-us").click({ force: true });
  });

  it("Should be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get("input[name='first_name']").type("Mosh");
    cy.get("input[name='last_name']").type("Hamedani");
    cy.get("input[name='email']").type("fff@fff.com");
    cy.get("input[name='email']").should("have.attr", "name", "email");
    cy.get("textarea[name='message']").type("How can I learn Cypress?");
    cy.get("input[type='submit']").click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("input[name='first_name']").type("Mosh");
    cy.get("input[name='last_name']").type("Hamedani");
    cy.get("textarea[name='message']").type("How can I learn Cypress?");
    cy.get("input[type='submit']").click();
  });
});
