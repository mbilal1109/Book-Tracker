const myLibrary = [];
const dialog = document.querySelector("#new-book-dialog");
const newBookBtn = document.querySelector("[data-new-book]");
const cancelBtn = document.querySelector(".cancel");
const addBookBtn = document.querySelector(".add-book");
const form = document.querySelector(".form-container");
const container = document.querySelector(".grid-container");

const bName = document.querySelector("#book-name");
const author = document.querySelector("#book-author");
const pages = document.querySelector("#book-pages");
const bStatus = document.querySelector("#book-status");

let card;
let delButton;

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(book) {
    createCard();
    createDeleteButton();

    let p1 = document.createElement("p");
    p1.textContent = book.title;

    let p2 = document.createElement("p");
    p2.textContent = book.author;

    let p3 = document.createElement("p");
    p3.textContent = book.pages;

    let p4 = document.createElement("p");
    p4.textContent = book.status;

    card.append(p1, p2, p3, p4, delButton);
    container.appendChild(card);
}

function createCard() {
    card = document.createElement("div");
    card.setAttribute("class", "book-info");
}

function createDeleteButton() {
    delButton = document.createElement("button");
    delButton.textContent = "Delete Book";
    delButton.setAttribute("class", "delete-button");
}

addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let bookName;
    let bookAuthor;
    let bookPages;
    let bookStatus;
    
    bookName = bName.value;
    bookAuthor = author.value;
    bookPages = pages.value;
    bookStatus = bStatus.value;

    const bookObject = new Book(bookName, bookAuthor, bookPages, bookStatus);
    addBookToLibrary(bookObject);
    dialog.close();

    displayBooks(bookObject);
});

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    console.log("Hello")
    dialog.close();
});
