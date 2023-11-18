const allBooksStr = localStorage.getItem("books");
const allBooksArr = JSON.parse(allBooksStr);
const allBooks = allBooksArr === null ? [] : allBooksArr;
function registerBook() {
  const nameBox = document.getElementById("nameBox");
  const authorBox = document.getElementById("authorBox");
  const pagesBox = document.getElementById("pagesBox");
  const priceBox = document.getElementById("priceBox");
  const publisherBox = document.getElementById("publisherBox");
  const imageBox = document.getElementById("imageBox");
  const dateBox = document.getElementById("dateBox");

  nameBox.style.backgroundColor = "";
  authorBox.style.backgroundColor = "";
  pagesBox.style.backgroundColor = "";
  priceBox.style.backgroundColor = "";
  publisherBox.style.backgroundColor = "";
  imageBox.style.backgroundColor = "";
  dateBox.style.backgroundColor = "";

  const name = nameBox.value;
  const author = authorBox.value;
  const pages = pagesBox.value;
  const price = priceBox.value;
  const publisher = publisherBox.value;
  const image = imageBox.value;
  const date = dateBox.value;

  if (!name) {
    nameBox.style.backgroundColor = "pink";
    alert("please enter a book name");
    nameBox.focus();
    return;
  }
  if (!author) {
    authorBox.style.backgroundColor = "pink";
    alert("please enter a book author");
    authorBox.focus();
    return;
  }
  if (!pages) {
    pagesBox.style.backgroundColor = "pink";
    alert("please enter the amount of pages");
    pagesBox.focus();
    return;
  } else if (pages < 1) {
    pagesBox.style.backgroundColor = "pink";
    alert("please enter a valid amount of pages");
    pagesBox.focus();
    return;
  }
  if (!price) {
    priceBox.style.backgroundColor = "pink";
    alert("please enter a book price");
    priceBox.focus();
    return;
  } else if (price < 1) {
    priceBox.style.backgroundColor = "pink";
    alert("please enter a valid price");
    priceBox.focus();
    return;
  }
  if (!publisher) {
    publisherBox.style.backgroundColor = "pink";
    alert("please enter a book publisher");
    publisherBox.focus();
    return;
  }
  if (!image) {
    imageBox.style.backgroundColor = "pink";
    alert("please enter a book cover image");
    imageBox.focus();
    return;
  }
  if (!date) {
    dateBox.style.backgroundColor = "pink";
    alert("please enter a book release date");
    dateBox.focus();
    return;
  }

  const book = { name, author, pages, price, publisher, image, date };
  allBooks.push(book);

  const allBooksStr = JSON.stringify(allBooks);
  localStorage.setItem("books", allBooksStr);

  console.log(allBooks);
  printTable();

  nameBox.value = "";
  authorBox.value = "";
  pagesBox.value = "";
  priceBox.value = "";
  publisherBox.value = "";
  imageBox.value = "";
  dateBox.value = "";
  nameBox.focus();
}

function printTable() {
  const allBooksStr = localStorage.getItem("books");
  const allBooks = JSON.parse(allBooksStr);
  if (!allBooks) return;
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = `<thead>
    <tr>
      <th>Name</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Price</th>
      <th>Publisher</th>
      <th>Image</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>`;
  for (const book of allBooks) {
    tableContainer.innerHTML += `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.price}</td>
    <td>${book.publisher}</td>
    <td><img src="${book.image}"></td>
    <td>${book.date}</td>
</tr>`;
  }
  tableContainer.innerHTML += `</tbody>`;
}
