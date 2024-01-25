const myLibrary = [];

const dialog = document.querySelector("[data-dialog]");
const newBookBtn = document.querySelector("[data-new-book]");
const cancelBtn = document.querySelector("[data-cancel]");
const form = document.querySelector("[data-form]");

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});
