import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges  {
  @Input() currentPage;
  @Input() limit;
  @Input() totalCount;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  range = 3; // Amount of pages before and after the current page
  totalPages = 0; // Amount of total pages
  pages: Observable<number[]>; // List of pages

  constructor() {}

  ngOnInit() {
    this.getPages(this.currentPage, this.limit, this.totalCount);
  }

  ngOnChanges() {
    this.getPages(this.currentPage, this.limit, this.totalCount);
  }

  /**
   * Get list of pages for pagination
   *
   * @param page
   * @param limit
   * @param total
   */
  getPages(page: number, limit: number, total: number) {
    this.totalPages = this.getTotalPages(limit, total);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
        .map(offset => page + offset)
        .filter(page => this.isValidPageNumber(page, this.totalPages))
        .toArray();
  }

  getTotalPages(limit: number, total: number): number {
    return Math.ceil(Math.max(total, 1) / Math.max(limit, 1));
  }

  /**
   * Chaeck if the page is valid
   *
   * @param page
   * @param totalPages
   * @returns {boolean}
   */
  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  /**
   * Select the page
   *
   * @param page
   * @param event
   */
  selectPage(page: number, event) {
    this.cancelEvent(event);
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit(page);
    }
  }

  /**
   * Prevent default action
   *
   * @param event
   */
  cancelEvent(event) {
    event.preventDefault();
  }

}
