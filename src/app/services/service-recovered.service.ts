import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recovered } from '../models/recovered.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRecoveredService {

  private URL_API = "http://localhost:8080/recovered";
  recovereds : recovered[];

  constructor(private http: HttpClient) { }

  getRecovereds(){
    return this.http.get<recovered[]>(this.URL_API);
    /*this.recovereds = [
      {
        id: 121544,
        name: "pepito fsdfs fadfasd ",
        age: "28 years"
      },
      {
        id: 12487,
        name: "pablo",
        age: "28 years"
      },
      {
        id: 545465,
        name: "maria",
        age: "21 years"
      },
      {
        id: 214785 ,
        name: "martha",
        age: "25 years"
      },
      {
        id: 5132475,
        name: "pedro",
        age: "35 years"
      },
      {
        id: 457441568,
        name: "elena",
        age: "41 years"
      },
      {
        id: 5245374,
        name: "jacinto",
        age: "14 years"
      }
    ]
    return this.recovereds;
    */
  }
  getRecovered(id){
    return this.http.get<recovered>(this.URL_API+"/"+id);
  }
  createRecovered(info){
    return this.http.post(this.URL_API, info);
  }
  editRecovered(id, info){
    console.log(id);
    return this.http.put(this.URL_API+"/"+id, info);
  }
  deleteRecovered(id){
    return this.http.delete(this.URL_API+"/"+id);
  }
}
