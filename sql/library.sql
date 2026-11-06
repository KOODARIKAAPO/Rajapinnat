-- Tietokanta ja taulut book ja borrower
CREATE DATABASE IF NOT EXISTS library;
USE library;

CREATE TABLE IF NOT EXISTS book (
    id_book INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    author VARCHAR(255),
    isbn VARCHAR(20)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS borrower (
    id_borrower INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(40),
    lname VARCHAR(40),
    streetaddress VARCHAR(40)
) ENGINE=InnoDB;

INSERT INTO book (name, author, isbn) VALUES
    ('Seitsemän veljestä', 'Aleksis Kivi', '978-951-0-12345-1'),
    ('Tuntematon sotilas', 'Väinö Linna', '978-951-0-23456-2'),
    ('Sinuhe egyptiläinen', 'Mika Waltari', '978-951-0-34567-3');

INSERT INTO borrower (fname, lname, streetaddress) VALUES
    ('Matti', 'Meikäläinen', 'Kotikatu 1'),
    ('Maija', 'Virtanen', 'Puistotie 5');

-- Käyttäjä, jolla Express-sovellus ottaa yhteyden (vaihda halutessasi)
CREATE USER IF NOT EXISTS 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL PRIVILEGES ON library.* TO 'netuser'@'localhost';
