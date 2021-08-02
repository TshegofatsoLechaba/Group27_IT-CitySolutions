import { SaleService } from './../services/sale.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './../interfaces/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  products:any;

  constructor(private _https:HttpClient, private _service:SaleService) { }

  ngOnInit() {
    this._service.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
}
