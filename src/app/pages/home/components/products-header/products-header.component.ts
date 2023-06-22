import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'Descending';

  constructor() { }

  ngOnInit(): void {
  }
}