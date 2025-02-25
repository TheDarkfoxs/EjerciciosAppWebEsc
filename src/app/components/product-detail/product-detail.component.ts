import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product!: { 
    name: string; 
    price: number; 
    inStock: boolean; 
    onSale: boolean; 
    image: string;
  };
}
