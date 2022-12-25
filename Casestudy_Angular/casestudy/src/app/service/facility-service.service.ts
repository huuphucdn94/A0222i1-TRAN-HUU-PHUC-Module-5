import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {

  url = "http://localhost:3000/facility"

  constructor(private http: HttpClient) {

  }

// goj len json server theo url va lay du lieu ve
  findAll(name: string, room: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.url}?_sort=name,area&_order=asc,desc&name_like=${name}&standard_room_like=${room}`);
  }
// tim doi tuong theo id de sua
  findById(id: number) {
    return this.http.get<Facility>(`${this.url}/${id}`);
  }

  deleteById(id: number) {
    // http://localhost:3000/facility/id
    return this.http.delete(`${this.url}/${id}`);
  }

  save(facility: Facility): Observable<Facility> {
    if(facility.id == null) return this.http.post(this.url, facility);
    return this.http.put(`${this.url}/${facility.id}`,facility)
  }
}
