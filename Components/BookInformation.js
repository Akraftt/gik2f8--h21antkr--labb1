// Här ska HTML-koden till rutan skrivas in 

const BookInformation = (book) => {
  let html = 
  `<div id="bookInfo" class="book__details 
  absolute inset-x 
  right-10 
  bg-white/10 p-1 w-1/6 top-60 left-500 ml-0 
  flex flex-col 
  text-center 
  text-gray-700 
  background-image: linear-gradient(to right, blue, yellow);">
  
              <img src="${book.coverImage}" alt="Cover missing 404">
              <p> Title: ${book.title}        </p>
              <p> Year: ${book.releaseDate}   </p>
              <p> Author: ${book.author}      </p>
              <p> Pages: ${book.pages}        </p>`;
  return html;
};