let myLibrary = [];

// get the button
const addNewBookBtn = document.getElementById('addNewBook');
// get the form
const form = document.getElementById('formPop');

// constructor for creating book object
function Book(id, title, author, pages, read = 'Read') {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// // Examples only
var harryPotter = new Book(0, 'Harry Potter', 'J. K. Rowling', 298 );
var dead = new Book(1, 'Dead Beautiful', 'Yvonne Woon', 400 );

myLibrary.push(harryPotter);
myLibrary.push(dead);










// delete button
let deleteBook = document.createElement('button');
deleteBook.textContent = "delete this book";













// get the container to display
const container = document.getElementById('container');

// showing the books to user
function showBooks() {
    myLibrary.slice().reverse().forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card');
        
        // book name - a little like heading
        let bookTitle = document.createElement('div');
        bookTitle.classList.add('booktitle');
        bookTitle.textContent = book.title;
        
        // author - a little smaller
        let bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = " by " + book.author;
        
        // pages 
        let bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        if (book.pages != '') {
            bookPages.textContent = 'Pages - ' + book.pages;
        }
    
        // read status
        let readStatus = document.createElement('div');
        readStatus.classList.add('readstatus');
        readStatus.textContent = book.read;
        
        // delete button
        let deleteBook = document.createElement('button');
        deleteBook.classList.add("delete-book");
        deleteBook.textContent = "delete this book";
        deleteBook.onclick = function() {
            container.removeChild(card);
            myLibrary.splice(book.id, 1);
        }
        
        
        
        // appending elements to cards such as name, author
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(readStatus);
        card.appendChild(deleteBook);
        
        // appending the card to container
        container.appendChild(card);
    })
}






// write function to add a book to myLibrary array
function addBookToLibrary() {
    // show form as a pop up
    form.style.display = 'block';
    
    // close button and hide if cancelled
    document.getElementById('closeButton').addEventListener('click', hideForm);
    
    // get the button and give the function to add
    document.getElementById('addThisBook').addEventListener('click', addThisBook);;
    
    // write the fucntion
    function addThisBook() {
        id = myLibrary.length;
        title = document.getElementById('titleInput').value;
        author = document.getElementById('authorTitle').value;
        pages = document.getElementById('pagesInput').value;
        read = document.getElementById('readSelect').value;
        
        if (title != '' && author != '') {
            // adding the new book to library
            var book = new Book(id, title, author, pages, read);
            myLibrary.push(book);
            
            // clearing the view container - its required otherwise all books will be shown twice
            while(container.firstChild) {
                container.removeChild(container.lastChild);
            }
            
            // calling showBooks function to show the new book added
            showBooks();
            
            // hide the form after adding
            hideForm();
        } else {
            alert("Please enter the name of book and the autor")
        }
        
        
    }
}



// hiding the form
function hideForm() {
    form.style.display = 'none';
    document.getElementById('titleInput').value = '';
    document.getElementById('authorTitle').value = '';
    document.getElementById('pagesInput').value = '';
    document.getElementById('readSelect').value = 'Read';
}







// calling required functions
showBooks();







// give an event listener to the button
addNewBookBtn.addEventListener('click', addBookToLibrary);