describe("labriry login tests", () => {
  it("login test", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible", true);
  });

   it("login test | empty password", () => {
     cy.visit("/");
    cy.login("bropet@mail.ru", null);
     cy.get("#pass").then((elements) => {
       expect(elements[0].checkValidity()).to.be.false;
     });
   });
  
  it("login test | empty mail", () => {
    cy.visit("/");
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
    });
  });
});

describe("labriry add book tests", () => {
  it("first add book", () => {
    cy.logInto();
    cy.contains("Add new").click();
    cy.get("#title").type("Преступление и наказание");
    cy.get("#description").type(
      "Cоциально-психологический и социально-философский роман"
    );
    cy.get("#authors").type("Ф.М.Достоевский");
    cy.contains("Submit").click();
  });

  it("add to favorite book", () => {
    cy.logInto();
    cy.get('[href="book/a244d54a-9d2c-4a95-a306-793c5c9eede4"] > .h-100 > .card-footer > .btn').click();
    cy.contains("Favorites").click();
    cy.contains("Преступление и наказание").should("be.visible", true);
  });

  it("delete to favorite book", () => {
    cy.logInto();
    cy.contains("Favorites").click();
    cy.get(".card-footer > .btn").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible", true);
  });
});