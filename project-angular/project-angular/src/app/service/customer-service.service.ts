import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  url = "http://localhost:3000/customer";

  constructor(private http: HttpClient) { }

  findAll(id: string, name: String):Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}?_sort=name,desc&id_like=${id}&name_like=${name}`)
  }

  findById(id: number){
    return this.http.get<Customer>(`${this.url}/${id}`);
  }

  deleteById(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  save(customer: Customer):Observable<Customer>{
    if (customer.id == null)
      return this.http.post(this.url,customer);
    return this.http.put(`${this.url}/${customer.id}`,customer);
  }
}
