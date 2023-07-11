import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  Url:string =  " http://localhost:3000";

  postApplication(data:any){
    return this.http.post(this.Url+"/Applications", data);
  }
  getApplication(){
  return this.http.get(this.Url+"/Applications");
  }

  //fetching data for displaying in details
  fetchData(id:any){
    return this.http.get(this.Url+"/Applications/" + id);
  }

  // fetching data for update the stored data
  putApplication(id:any, data:any){
    return this.http.put(this.Url+"/Applications/" + id, data);
  }

  // delete data
  deleteApplication(id:any){
    return this.http.delete(this.Url+"/Applications/" + id);
  }

}