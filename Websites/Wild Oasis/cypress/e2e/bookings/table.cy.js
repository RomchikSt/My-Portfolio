/// <reference types="cypress" />

describe("Test Bookings", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "login");
    cy.get(".sc-eLSjS").click();
    cy.get(":nth-child(2) > .sc-clcPSL").click();
    cy.url().should("include", "bookings");
    cy.get(".sc-grXZZQ")
      .should("contain", "All")
      .and("have.css", "background-color", "rgb(79, 70, 229)");
  });

  it("Check correct table header", () => {
    const tableHeaders = ["Cabin", "Guest", "Dates", "Status", "Amount", ""];

    cy.get(".sc-hHvkSs")
      .find("div")
      .should("have.length", tableHeaders.length)
      .each((item, index) => {
        cy.wrap(item).should("contain", tableHeaders[index]);
      });
  });

  it("Check table footer for All Button", () => {
    cy.get(".sc-dmBjiZ")
      .find("header")
      .then((headers) => {
        if (headers.length >= 10) {
          cy.get(".sc-gXCJSa")
            .should("contain", "Showing 1 to")
            .and("contain", "Previous")
            .and("contain", "Next");
        }
      });
  });

  it("Check table for Checked Out", () => {
    cy.get(".sc-bcPKhP > :nth-child(2)").click();
    cy.get(":nth-child(2) > .sc-GFXod").click();

    cy.get("html").then(($html) => {
      if ($html.hasClass("light-mode")) {
        cy.get(".sc-dmBjiZ")
          .find("header")
          .find("span")
          .should("contain", "checked out")
          .and("have.css", "color", "rgb(55, 65, 81)");
      } else {
        cy.get(".sc-dmBjiZ")
          .find("header")
          .find("span")
          .should("contain", "checked out")
          .and("have.css", "color", "rgb(229, 231, 235)");
      }
    });
  });

  it("Check table for Checked In", () => {
    cy.get(".sc-bcPKhP > :nth-child(3)").click();

    cy.get("html").then(($html) => {
      if ($html.hasClass("light-mode")) {
        cy.get(".sc-dmBjiZ")
          .find("header")
          .find("span")
          .should("contain", "checked in")
          .and("have.css", "color", "rgb(55, 65, 81)");
      } else {
        cy.get(".sc-dmBjiZ")
          .find("header")
          .find("span")
          .should("contain", "checked in")
          .and("have.css", "color", "rgb(229, 231, 235)");
      }
    });
  });

  it("Check table for Unconfirmed", () => {
    cy.get(".sc-bcPKhP > :nth-child(4)").click();

    cy.get("html").then(($html) => {
      if ($html.hasClass("light-mode")) {
        cy.get(".sc-dmBjiZ")
          .find("header")
          .find("span")
          .should("contain", "unconfirmed")
          .and("have.css", "color", "rgb(55, 65, 81)");
      } else {
        cy.get(".sc-dmBjiZ")
          .find("header")
          .find("span")
          .should("contain", "unconfirmed")
          .and("have.css", "color", "rgb(229, 231, 235)");
      }
    });
  });
});
