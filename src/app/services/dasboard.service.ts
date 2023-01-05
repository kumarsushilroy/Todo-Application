import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Dashbord } from '../Models/dashbord';
import { Observable } from 'rxjs';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  constructor(private http:HttpClient) { }

  serviceUrl = "http://localhost:3000/posts"

  postData(data:Dashbord):Observable<Dashbord>{
    return this.http.post<Dashbord>(this.serviceUrl,data)

  }
  getData():Observable<Dashbord[]>{
    return this.http.get<Dashbord[]>(this.serviceUrl)

  }
  
  deleteData(data:Dashbord):Observable<Dashbord>{
    return this.http.delete<Dashbord>(this.serviceUrl+'/'+data.id)
  }

  updateData(data:Dashbord):Observable<Dashbord>{
     return this.http.put<Dashbord>(this.serviceUrl+'/'+data.id , data)
  }
 


}
