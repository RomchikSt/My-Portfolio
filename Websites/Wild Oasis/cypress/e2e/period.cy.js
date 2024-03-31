/// <reference types="cypress" />

describe("test periods", () => {
  it("last 30 days", () => {
    cy.visit("https://rstp-wild-oasis.netlify.app/");
    cy.get(".sc-eLSjS").click();
    cy.contains("Romchik Stakhiv");
    cy.get(".sc-bcPKhP > :nth-child(2)").click();
    cy.url().should("include", "last=30");
    cy.get(".sc-iBAaJG > .sc-ftLKQv")
      .invoke("text")
      .then((text) => {
        const regex = /(\w{3}) (\d{1,2}) (\d{4}) — (\w{3}) (\d{1,2}) (\d{4})/;
        const matches = text.match(regex);

        const startDate = new Date(
          `${matches[1]} ${matches[2]}, ${matches[3]}`
        );
        const endDate = new Date(`${matches[4]} ${matches[5]}, ${matches[6]}`);
        const expectedStartDate = new Date();
        expectedStartDate.setDate(expectedStartDate.getDate() - 29);
        const expectedEndDate = new Date();

        expect(startDate.toDateString()).to.equal(
          expectedStartDate.toDateString()
        );
        expect(endDate.toDateString()).to.equal(expectedEndDate.toDateString());
      });
  });

  it("last 90 days", () => {
    cy.visit("https://rstp-wild-oasis.netlify.app/");
    cy.get(".sc-eLSjS").click();
    cy.get(".sc-bcPKhP > :nth-child(3)").click();
    cy.url().should("include", "last=90");
    cy.get(".sc-iBAaJG > .sc-ftLKQv")
      .invoke("text")
      .then((text) => {
        const regex = /(\w{3}) (\d{1,2}) (\d{4}) — (\w{3}) (\d{1,2}) (\d{4})/;
        const matches = text.match(regex);

        const startDate = new Date(
          `${matches[1]} ${matches[2]}, ${matches[3]}`
        );
        const endDate = new Date(`${matches[4]} ${matches[5]}, ${matches[6]}`);
        const expectedStartDate = new Date();
        expectedStartDate.setDate(expectedStartDate.getDate() - 89);
        const expectedEndDate = new Date();

        expect(startDate.toDateString()).to.equal(
          expectedStartDate.toDateString()
        );
        expect(endDate.toDateString()).to.equal(expectedEndDate.toDateString());
      });
  });
});
