import { SaleService } from './../services/sale.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './../interfaces/interface';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  products:any;

  constructor( private router:Router) { }

  ngOnInit() {
  
    }
    goToInventoryOptions()
    {
      this.router.navigate(['/inventory-options']);
    }
       
  }

