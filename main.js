const myLibrary = [];
const dialog = document.querySelector("#newBook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitButton = document.querySelector("#submit");
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    myLibrary.push(new book
        (data.get("title"), data.get("author"), data.get("pages")));
    updateDisplay();
    dialog.close();
})

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function updateDisplay() {
    // to clear display so there's no duplicate cards
    let child = libraryContainer.lastElementChild;
    while(child) {
        libraryContainer.removeChild(child);
        child = libraryContainer.lastElementChild;
    }

    myLibrary.forEach(element => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
    
        const title = document.createElement("h1");
        title.innerText = element.title;
        title.style.textAlign = "center";
        bookCard.appendChild(title);
    
        const author = document.createElement("h2");
        author.innerText = element.author;
        author.style.textAlign = "center";
        bookCard.appendChild(author);
        
        const pages = document.createElement("p");
        pages.innerText = element.pages;
        pages.style.textAlign = "center";
        bookCard.appendChild(pages);
    
        libraryContainer.appendChild(bookCard);
    });
}



function showNewBookDialog() {
    dialog.showModal();
}

const libraryContainer = document.querySelector(".libraryContainer");





