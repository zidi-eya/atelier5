import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {CalculService} from '../services/calcul.service';


@Component({
  selector: 'app-produtcs',
  templateUrl: './produtcs.component.html',
  styleUrls: ['./produtcs.component.css']
})
export class ProdutcsComponent implements OnInit {

  listProduct: Product[];
  alertStock: number;

  constructor(private serviceCal: CalculService) {
  }

  ngOnInit(): void {
    this.listProduct = [
      {id: 1, title: 'T-shirt 1', price: 20, quantity: 9, like: 0},
      {id: 2, title: 'T-shirt 2', price: 10, quantity: 0, like: 0},
      {id: 3, title: 'T-shirt 3', price: 100, quantity: 0, like: 0},
    ];
  }

 getAlertStock(){
    this.alertStock =  this.serviceCal.getNumberOf(this.listProduct, 'quantity', 0);
 }

}
