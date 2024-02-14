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
let statusButton;
let cardIndex = 0;
let deleteIndex = 0;

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createText(book) {
    let p1 = document.createElement("p");
    p1.textContent = `Name: ${book.name}`;

    let p2 = document.createElement("p");
    p2.textContent = `Author: ${book.author}`;

    let p3 = document.createElement("p");
    p3.textContent = `Pages: ${book.pages}`;

    let p4 = document.createElement("p");
    p4.textContent = `Status: ${book.status}`;

    card.append(p1, p2, p3, p4, delButton, statusButton);
}

function displayAllBooks() {
    container.innerHTML = "";
    cardIndex = 0;
    deleteIndex = 0;
    myLibrary.forEach((book) => { 
      createCard();
      createDeleteButton();
      createStatusButton();
      createText(book);
      container.appendChild(card);
    });
}

function createCard() {
    card = document.createElement("div");
    card.setAttribute("class", "book-info");
    card.setAttribute("data-value", `${cardIndex}`);
    cardIndex++;
}

function createDeleteButton() {
    delButton = document.createElement("button");
    delButton.textContent = "Delete Book";
    delButton.setAttribute("class", "delete-button");
    delButton.setAttribute("data-index", `${deleteIndex}`);
    deleteIndex++;
}

function createStatusButton() {
    statusButton = document.createElement("button");
    statusButton.textContent = "Toggle Status";
    statusButton.setAttribute("class", "status-button");
}

function handleDeleteButton(e) {
    if(!e.target.matches('.delete-button')) return; // skip this unless it's the delete button 
    const element = e.target;
    myLibrary.splice(element.dataset.index, 1);
    displayAllBooks();
}

container.addEventListener('click', handleDeleteButton);

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();

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
    displayAllBooks();
    form.reset();
});

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});
