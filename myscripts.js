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
var harryPotter = new Book(0, 'Harry Potter', 'J. K. Rowling', 298, 'Unread');
var dead = new Book(1, 'Dead Beautiful', 'Yvonne Woon', 400 );

myLibrary.push(harryPotter);
myLibrary.push(dead);








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
    
        // read button and delete button container
        let bookButtonContainer = document.createElement('div');
        bookButtonContainer.classList.add('bookButtonContainer');
        
        
        // read button
        let readBtn = document.createElement('button');
        readBtn.textContent = book.read;
        
        if (book.read == 'Read') {
            readBtn.classList.add('read-button');
        }
        else {
            readBtn.classList.add('unread-button');
        }
        
        readBtn.onclick = function() {
            if (book.read == 'Read') {
                book.read = 'Unread';
                readBtn.textContent = 'Unread';
                readBtn.classList.remove('read-button');
                readBtn.classList.add('unread-button');
                console.log('read clicked')
            }
            else {
                book.read = 'Read';
                readBtn.textContent = 'Read';
                readBtn.classList.remove('unread-button');
                readBtn.classList.add('read-button');
                console.log('Unread clicked')
            }
        }
        
        // delete button
        let deleteBook = document.createElement('div');
        let dltMarkup = `
            <button class="delete-book">
                <i class="material-icons md-36">delete</i>   
            </button>
        `
        deleteBook.innerHTML = dltMarkup;
        deleteBook.onclick = function() {
            container.removeChild(card);
            myLibrary.splice(book.id, 1);
        }
        
        bookButtonContainer.appendChild(readBtn);
        bookButtonContainer.appendChild(deleteBook);
        
        
        
        // appending elements to cards such as name, author
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookButtonContainer);
        
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