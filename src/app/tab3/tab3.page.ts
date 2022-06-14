import { Router } from '@angular/router';
import { APP_KEYS } from './../models';
import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewChecked {
  borrowedBooks = [];
  now = new Date().toLocaleString();
  constructor(private router: Router) {}
  ngAfterViewChecked(): void {
    const borrowedBooksLocal = JSON.parse(localStorage.getItem(APP_KEYS.borrowedBooks)) ;
    if (!borrowedBooksLocal) {
      localStorage.setItem(APP_KEYS.borrowedBooks, JSON.stringify([]));
    }

    this.borrowedBooks = borrowedBooksLocal;
  }

  viewDetails(id) {
    this.router.navigateByUrl(`books/${id}/view`);
  }
}
