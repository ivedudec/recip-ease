/* complex_code.js */

// This code demonstrates a complex system for managing a library's catalog and lending books.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
    this.borrower = null;
  }

  borrowBook(user) {
    if (this.isAvailable) {
      this.isAvailable = false;
      this.borrower = user;
      console.log(`${user} has borrowed ${this.title}.`);
    } else {
      console.log(`Sorry, ${this.title} is currently unavailable.`);
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
      this.borrower = null;
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.booksBorrowed = [];
  }

  borrowBook(book) {
    if (book.isAvailable) {
      this.booksBorrowed.push(book);
      book.borrowBook(this.name);
    } else {
      console.log(`Sorry, ${book.title} is currently unavailable.`);
    }
  }

  returnBook(book) {
    const index = this.booksBorrowed.indexOf(book);
    if (index !== -1) {
      this.booksBorrowed.splice(index, 1);
      book.returnBook();
    }
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.catalog = [];
    this.users = [];
  }

  addBook(book) {
    this.catalog.push(book);
  }

  addUser(user) {
    this.users.push(user);
  }

  displayCatalog() {
    console.log(`Catalog of ${this.name}:`);
    this.catalog.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year})`);
    });
  }

  displayUsers() {
    console.log(`Users of ${this.name}:`);
    this.users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
    });
  }
}

// Create library and add books
const library = new Library("My Library");

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Create users and borrow/return books
const user1 = new User("John");
const user2 = new User("Emily");

library.addUser(user1);
library.addUser(user2);

user1.borrowBook(book1);
user1.borrowBook(book2);
user2.borrowBook(book3);

user1.returnBook(book1);

// Display library information
library.displayCatalog();
library.displayUsers();