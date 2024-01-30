import { CurrencyPipe, LowerCasePipe, NgFor, SlicePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { catchError, map } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, NgFor, LowerCasePipe, SlicePipe, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .pipe(map((data: any) => {
        return data.map((p: any) => { return { ...p, price: p.price *= 40 } })
      }),
        catchError(err => { console.log(err); return []; })
      )
      .subscribe(data=>this.products = data);
  }
}

