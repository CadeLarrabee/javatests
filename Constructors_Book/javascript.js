document
  .getElementById("bookform")
  .addEventListener("submit", function (event) {
    // Perform validation or other actions before form submission
    event.preventDefault();
    // Prevents the form from being submitted

    var Name = document.getElementById("Name").value;
    var Author = document.getElementById("Author").value;
    var Pages = document.getElementById("Pages").value;
    var Read = document.getElementById("Read").value;

    const book = new Book(Name, Author, Pages, Read);
    library.AddBook(book);
    library.GenerateOneTableEntry(book);
  });

function Book(Name, Author, Pages, Read) {
  this.Name = Name;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;

  this.info = function () {
    return [this.Name, this.Author, this, Pages, this.Read];
  };
}

class Library {
  constructor() {
    this.books = [];
  }

  AddBook(Book) {
    this.books.push(Book);
  }
  AddAllBooksToDom() {
    this.books.forEach(function (book, index) {
      let div = document.createElement("div");
      div.id = "book " + index;
      div.innerHTML = book.Name;
      document.body.appendChild(div);
    });
  }

  GenerateAllTable() {
    //This function generates a table with all available books in array.
    //It then generate
    var tableHtml = "<table id='booktable' border='1'>";
    tableHtml += "<tr><th>Title</th><th>Author</th></tr>";

    this.books.forEach(function (book) {
      tableHtml += "<tr>";
      tableHtml += "<td class ='Name'>" + book.Name + "</td>";
      tableHtml += "<td class ='Author'>" + book.Author + "</td>";
      tableHtml += "<td class ='Pages'>" + book.Pages + "</td>";
      tableHtml += "<td class ='Read'>" + book.Read + "</td>";
      tableHtml +=
        "<td id='readButton'>" +
        "<button class='read'>" +
        "Read?" +
        "</button>" +
        "</td>";
      tableHtml +=
        "<td id='removeButton'>" +
        "<button class='remove'>" +
        "X" +
        "</button>" +
        "</td>";
      tableHtml += "</tr>";
    });

    tableHtml += "</table>";

    let container = document.createElement("booktable");
    container.innerHTML = tableHtml;
    document.body.appendChild(container);

    container.addEventListener("click", function (event) {
      if (event.target.classList.contains("remove")) {
        // Call a function to handle the remove button click
        library.handleRemoveButtonClick(event.target);
      }
      if (event.target.classList.contains("read")) {
        // Call a function to handle the remove button click
        library.handleReadButtonClick(event.target);
      }
    });
  }

  handleRemoveButtonClick(button) {
    // Get the corresponding row and remove it
    let row = button.closest("tr");
    if (row) {
      row.remove();
    }
  }
  handleReadButtonClick(button) {
    let row = button.closest("tr");
    let libId = row.rowIndex - 1;

    library.books[libId].Read = !library.books[libId].Read;
    console.log(library.books[libId].Read);

    let readCell = row.querySelector(".Read");
    console.log(readCell);
    if (readCell) {
      readCell.textContent = library.books[libId].Read;
      console.log(readCell);
    }
  }

  GenerateOneTableEntry = function (book) {
    let table = document.getElementById("booktable");

    // Create row element
    let row = document.createElement("tr");

    // Create cells
    let c1 = document.createElement("td");
    c1.className = "Name";
    let c2 = document.createElement("td");
    c2.className = "Author";
    let c3 = document.createElement("td");
    c3.className = "Pages";
    let c4 = document.createElement("td");
    c4.className = "Read";
    let c5 = document.createElement("td");
    let c6 = document.createElement("button");
    c6.innerText = "Read?";
    c6.className = "read";
    let c7 = document.createElement("td");
    let c8 = document.createElement("button");
    c8.innerText = "X";
    c8.className = "remove";

    // Insert data to cells
    c1.innerText = book.Name;
    c2.innerText = book.Author;
    c3.innerText = book.Pages;
    c4.innerText = book.Read;

    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    c5.appendChild(c6);
    row.appendChild(c7);
    c7.appendChild(c8);

    // Append row to table body
    table.appendChild(row);
  };
}

const library = new Library();

const book1 = new Book("The Way Of Kings", "Brandon Sanderson", 720, true);
const book2 = new Book("The Hobbit", "JRR Tolkein", 310, true);
const book3 = new Book("Mistborn", "Brandon Sanderson", 530, false);
const book4 = new Book("The Name Of The Wind", "Patrick Rothfuss", 290, true);
const book5 = new Book("A Storm Of Swords", "GRR Martin", 910, true);
const book6 = new Book("A Stoics Guide", "Michael B Artin", 115, false);

library.AddBook(book1);
library.AddBook(book2);
library.AddBook(book3);
library.AddBook(book4);
library.AddBook(book5);
library.AddBook(book6);

library.AddAllBooksToDom();
library.GenerateAllTable();
