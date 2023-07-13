import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
[x: string]: any;
  @Input() fullWidthMode = false;
}
