import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  config: any;
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getProducts();
    this.setConfigPagination();
  }

  setConfigPagination() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.products.length
    };
  }
  getProducts() {
    this.restService.getProductList()
      .subscribe(
        data => {
          for (let i in data) {
            this.products.push(data[i]);
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
