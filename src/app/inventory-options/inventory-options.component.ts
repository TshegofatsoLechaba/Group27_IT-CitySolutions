import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  templateUrl: './inventory-options.component.html',
  styleUrls: ['./inventory-options.component.css']
})
export class InventoryOptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goAddProductCategory()
  {
    this.router.navigate(['/add-product-category']);
  }
}
