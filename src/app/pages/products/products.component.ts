import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Iproduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  private _router = inject(Router);

  productList: Iproduct[] = [];

  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data : Iproduct[]) => {
      this.productList = data;
    });
  }

  navegate(id: number) {
    this._router.navigate(['/Product',id])
    }

}
