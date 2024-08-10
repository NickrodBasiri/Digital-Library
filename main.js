const myLibrary = [];
const dialog = document.querySelector("#newBook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitButton = document.querySelector("#submit");
const form = document.querySelector(".form");
const closeButton = document.querySelector(".closeDialog");
const readButton = document.querySelector("#read");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const readStatus = readButton.checked;
    const data = new FormData(e.target);
    myLibrary.push(new book(
        data.get("title"), 
        data.get("author"), 
        data.get("pages"), 
        readStatus
    ));
    updateDisplay();
    dialog.close();
    form.reset();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = "";
}

function updateDisplay() {
    // Clear display so there's no duplicate cards
    let child = libraryContainer.lastElementChild;
    while (child) {
        libraryContainer.removeChild(child);
        child = libraryContainer.lastElementChild;
    }

    myLibrary.forEach((element, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        const bookIndex = document.createElement("p");
        bookIndex.innerText = index + 1;
        bookCard.appendChild(bookIndex);

        const title = document.createElement("h1");
        title.innerText = element.title;
        title.style.textAlign = "center";
        bookCard.appendChild(title);
    
        const author = document.createElement("h2");
        author.innerText = `Author: ${element.author}`;
        author.style.textAlign = "center";
        bookCard.appendChild(author);
        
        const pages = document.createElement("p");
        pages.innerText = `${element.pages} pages`;
        pages.style.textAlign = "center";
        bookCard.appendChild(pages);

        const readContainer = document.createElement("div");
        readContainer.style.textAlign = "center";

        const readLabel = document.createElement("label");
        readLabel.innerText = "Read: ";

        const readBox = document.createElement("input");
        readBox.setAttribute("type", "checkbox");
        readBox.checked = element.read;
        readLabel.appendChild(readBox);
        readContainer.appendChild(readLabel);
        bookCard.appendChild(readContainer);

        const close = document.createElement("button");
        close.innerText = "Remove";
        close.id = "closeButton";
        close.addEventListener("click", () => {
            bookCard.remove();
            myLibrary.splice(index, 1);
            updateDisplay();
        });
        bookCard.appendChild(close);
    
        libraryContainer.appendChild(bookCard);
    });
}

function showNewBookDialog() {
    dialog.showModal();
}

const libraryContainer = document.querySelector(".libraryContainer");