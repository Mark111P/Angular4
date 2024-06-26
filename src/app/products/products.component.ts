import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/products.service';
import { Product } from '../product';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [HttpService]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor (private httpService: HttpService){}

  ngOnInit() {
    this.httpService.getProducts().subscribe(data => this.products=data);
  }
}
