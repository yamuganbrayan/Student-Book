import { APP_KEYS } from './../models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book, books } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  books: Book[] = [];
  searchFilter = '';
  constructor(private router: Router) {
    const booksData = localStorage.getItem(APP_KEYS.books);
    console.log(booksData);

    if (booksData === null) {
      localStorage.setItem(APP_KEYS.books, JSON.stringify(books));
      this.books.push(...books);
    } else {
      this.books = JSON.parse(booksData);
    }
  }

  viewDetails(id) {
    this.router.navigateByUrl(`books/${id}/view`);
  }

  borrow(book: Book) {
    const borrowedBooksLocal =
      JSON.parse(localStorage.getItem(APP_KEYS.borrowedBooks)) || [];
      book.borrowedAt = new Date();
      book.stocks = book.stocks - 1;
    borrowedBooksLocal.push(book);
    for (let index = 0; index < this.books.length; index++) {
      const element = this.books[index];
      if (element.id === book.id) {
        this.books[index] = book;
      }
    }
    localStorage.setItem(
      APP_KEYS.borrowedBooks,
      JSON.stringify(borrowedBooksLocal)
    );

    localStorage.setItem(
      APP_KEYS.books,
      JSON.stringify(this.books)
    );
  }
}
