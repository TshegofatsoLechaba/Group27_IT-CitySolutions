import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductSizeData, ProductCategoryData, CartItemData} from './SaleData';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http:HttpClient) { }

  url = "https://localhost:44373/api/"

  getCategories():Observable<ProductCategoryData[]>
  {
    return this.http.get<ProductCategoryData[]>(this.url + "Sale/GetCategories")
  }

  getItems(CategoryID:any):Observable<ProductSizeData[]>
  {
    const params = new HttpParams().set("CategoryID", CategoryID)
    return this.http.get<ProductSizeData[]>(this.url + "Sale/GetItems", {params})
  }

  getCartItems():Observable<CartItemData[]>
  {
    return this.http.get<CartItemData[]>(this.url + "Sale/GetCartItems");
  }

  IncreaseQuantity(_Product_Size_ID:any)
  {
    const params = new HttpParams().set("ProdSizeID", _Product_Size_ID)
    return this.http.post(this.url + "Sale/IncreaseQuantity","",{params})
  }

  DecreaseQuantity(_Product_Size_ID:any)
  {
    const params = new HttpParams().set("ProdSizeID", _Product_Size_ID)
    return this.http.post(this.url + "Sale/DecreaseQuantity","",{params})
  }

  AddCartItem(_Product_Size_ID:any)
  {
    const params = new HttpParams().set("ProdSizeID", _Product_Size_ID)
    return this.http.post(this.url + "Sale/AddCartItem","",{params})
  }

  CancelSale()
  {
    return this.http.delete(this.url + "Sale/CancelSale")
  }

  MakeSale(AmountPaid:any)
  {
    const params = new HttpParams().set("CashAmount", AmountPaid)
    return this.http.post(this.url + "Sale/MakeCashSale","",{params})
  }
}



