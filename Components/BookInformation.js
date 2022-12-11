const BookInformation = (book) => {
  let html = 
  `<div id="bookInfo" class="book__details 
  absolute inset-x 
  bg-white p-1 w-1/6 top-60 left-200 ml-0 
  flex flex-col 
  text-center 
  background-image: linear-gradient(to right, blue, yellow);">
  
              <img src="  ${book.coverImage}      "alt="Cover missing 404">
              <p> Title:  ${book.title}           </p>
              <p> Year:   ${book.releaseDate}     </p>
              <p> Author: ${book.author}          </p>
              <p> Pages:  ${book.pages}           </p>`;

  return html;};