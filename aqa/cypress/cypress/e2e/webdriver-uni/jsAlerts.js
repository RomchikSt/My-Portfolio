/// <reference types="cypress" />

describe("Handle JS Alerts", () => {
  it("Confirm JS alerts", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
    cy.get("#button2").click();
  });

  it("Cancel JS alerts", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return false;
    });
  });
  it("Cancel JS alerts using stabs", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      });
  });
});
