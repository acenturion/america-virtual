import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  qty: number = 1;
  loading: boolean = false;

  formProduct = new FormGroup({
    id: new FormControl('0'),
    method: new FormControl('Tarjeta'),
    qty: new FormControl('1')
  });

  constructor(private restService : RestService) { }

  ngOnInit(): void {
  }

  plus(): void {
    this.qty++;
  }

  minus(): void {
    if (this.qty > 0) {
      this.qty--;
    }
  }


  onSubmit(e : Event) {
    this.loading = true;
    this.formProduct.get('id').setValue(1);
    this.formProduct.get('qty').setValue(this.qty);
    console.table(this.formProduct.value);


    this.restService.buy(this.formProduct).subscribe(
      res => {
        //console.log(res);
        this.loading = false;
      },
      error => {
        //console.log(error);
        this.loading = false;
      },
    );
  }
}
