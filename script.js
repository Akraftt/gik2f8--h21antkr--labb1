'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {

  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  // ----------------------------------------------------------------------------------------------------------------- //

  // alla elemnt från book-list__item
  const elements = document.querySelectorAll(".book-list__item");

  elements.forEach((element) => {                                 // loopar igenom elementen
    element.addEventListener("mouseenter", (e) => {               // Hämta book info med if av element
      let book = fetchInfo(e.target.id);                          // När boken är hämta, rendera book
      book.then((result) => renderBookItem(result));              
    });
  
    element.addEventListener("mouseleave", () => {                // mus lyssnare för elementet
      const existElement = document.getElementById("bookInfo");   // väljer book info element
      existElement && existElement.remove();                      // ifall booken finns, ta bort.
    });
  });
}



function renderBookItem(book) {
  const root = document.getElementById("root");

  const bookInfo = document.createElement("div");                 // skapar div element för book info
  bookInfo.id = "bookInfo";                                       

  bookInfo.innerHTML = BookInformation(book);                     
  const existElement = document.getElementById("bookInfo");       // ifall en book redan finns, tas bort.
  if (existElement) {
    existElement.remove();
  }
  root.insertAdjacentElement("afterend", bookInfo);               // lägger till ny book info
}
