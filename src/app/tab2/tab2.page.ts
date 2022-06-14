import { APP_KEYS } from './../models';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Book } from '../models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  book: Book;
  books: Book[];
  constructor(public route: ActivatedRoute) {
    this.books = JSON.parse(localStorage.getItem(APP_KEYS.books));
    this.route.params.subscribe((params) => {
      this.book = this.books.find(
        (book) => book.id === parseInt(params.id, 10)
      );
    });
  }

  borrow(book: Book) {
    const borrowedBooksLocal =
      JSON.parse(localStorage.getItem(APP_KEYS.borrowedBooks)) || [];
    book.borrowedAt = new Date();
    book.stocks = book.stocks - 1;
    this.book = book;
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

    localStorage.setItem(APP_KEYS.books, JSON.stringify(this.books));
  }
}
