import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3333/api/models";


getAll(){
  return this.http.get<Model[]>(this.apiUrl);
}


getimageDetailById(id:number){
  return this.http.get<Model>(`${this.apiUrl}/${id}`);
  }

  persistImage(model : {}){
    return this.http.post<Model>(this.apiUrl,model);
   }

}
