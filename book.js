// Olio (object) luodaan suoraan ilman luokkaa
const book = {
    // bookArray kopioitu book-olion sisään
    bookArray: [
        { id_book: 1, name: "Seitsemän veljestä", author: "Aleksis Kivi", isbn: "978-951-0-12345-1" },
        { id_book: 2, name: "Tuntematon sotilas", author: "Väinö Linna", isbn: "978-951-0-23456-2" },
        { id_book: 3, name: "Sinuhe egyptiläinen", author: "Mika Waltari", isbn: "978-951-0-34567-3" },
        { id_book: 4, name: "Kalevala", author: "Elias Lönnrot", isbn: "978-951-0-45678-4" }
    ],

    // Tulostaa koko bookArrayn. this viittaa book-olioon
    getAllBooks: function () {
        console.log(this.bookArray);
    },

    // Tulostaa kirjan, jonka id_book on x
    getOneBook: function (x) {
        const found = this.bookArray.find(b => b.id_book === x);
        if (found) {
            console.log(found);
        } else {
            console.log("Kirjaa id:llä " + x + " ei löytynyt");
        }
    },

    // Lisää uuden kirjan bookArrayhin push-metodilla
    addBook: function (id_book, name, author, isbn) {
        this.bookArray.push({ id_book: id_book, name: name, author: author, isbn: isbn });
    }
};

// Testit
console.log("--- getAllBooks()");
book.getAllBooks();

console.log("--- getOneBook(2)");
book.getOneBook(2);

console.log("--- getOneBook(99)");
book.getOneBook(99);

console.log("--- addBook(5, ...)");
book.addBook(5, "Täällä Pohjantähden alla", "Väinö Linna", "978-951-0-56789-5");
book.getOneBook(5);

console.log("--- getAllBooks() lisäyksen jälkeen");
book.getAllBooks();
