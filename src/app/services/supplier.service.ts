import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier} from 'src/app/services/supplier-interface'

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }

  url = "https://localhost:44373/api/"

  create(data: any): Observable<any> {
    return this.http.post(this.url + "Suppliers", data);
  }
  get(id:any):Observable<any>{
    return this.http.get(this.url + "Suppliers/" + id);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(this.url + "Suppliers/" + id, data);
  }
  getPaymentMethods():Observable<Supplier[]>
  {
    return this.http.get<Supplier[]>(this.url + "Suppliers")
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.url + "Suppliers/" + id);
  }

}
