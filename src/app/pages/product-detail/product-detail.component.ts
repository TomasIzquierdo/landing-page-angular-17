import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Iproduct } from '../../models/product.model';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  loading : boolean = true;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public product?: Iproduct;

  ngOnInit(): void {
    this._route.params.subscribe( params =>{
      this._apiService.getProductById(params['id']).subscribe((data: Iproduct) => {
        this.product = data;
        this.loading = false;
      });
    }
    );
  }

}
