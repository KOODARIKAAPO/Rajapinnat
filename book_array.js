// Assosiatiivinen array, jossa samat kentät kuin library-tietokannan book-taulussa
const bookArray = [
    { id_book: 1, name: "Seitsemän veljestä", author: "Aleksis Kivi", isbn: "978-951-0-12345-1" },
    { id_book: 2, name: "Tuntematon sotilas", author: "Väinö Linna", isbn: "978-951-0-23456-2" },
    { id_book: 3, name: "Sinuhe egyptiläinen", author: "Mika Waltari", isbn: "978-951-0-34567-3" },
    { id_book: 4, name: "Kalevala", author: "Elias Lönnrot", isbn: "978-951-0-45678-4" }
];

// 1. Taulun "tietotyyppi"
console.log("Tietotyyppi:", typeof bookArray);

// 2. Koko bookArrayn sisältö
console.log("Koko sisältö:", bookArray);

// 3. Ensimmäinen rivi
console.log("Ensimmäinen rivi:", bookArray[0]);

// 4. Ensimmäisen kirjan nimi
console.log("Ensimmäisen kirjan nimi:", bookArray[0].name);

// 5. Rivien määrä
console.log("Rivien määrä:", bookArray.length);

// 6. Kaikkien kirjojen nimet
console.log("Kaikkien kirjojen nimet:");
bookArray.forEach(book => {
    console.log(book.name);
});
