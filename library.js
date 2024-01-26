const myLibrary = [];
const dialog = document.querySelector("#new-book-dialog");
const newBookBtn = document.querySelector("[data-new-book]");
const cancelBtn = document.querySelector(".cancel");
const addBookBtn = document.querySelector(".add-book");
const form = document.querySelector(".form-container");

const bName = document.querySelector("#book-name");
const author = document.querySelector("#book-author");
const pages = document.querySelector("#book-pages");
const bStatus = document.querySelector("#book-status");

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    console.log("Books")
}

function createCard() {
    console.log("card")
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

    console.log(bookName);
    dialog.close();
});

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    console.log("Hello")
    dialog.close();
});
