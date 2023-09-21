import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports'];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
