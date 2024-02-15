import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../models/model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3333/api/models/";


getAll(){
  return this.http.get<Model[]>(this.apiUrl).pipe(
    catchError(this.handleError)
  );;
}


getimageDetailById(id:any){
  return this.http.get<Model>(`${this.apiUrl}${id}`);
  }


  addModels(model:Model) {
    return this.http.post<Model>(this.apiUrl,model)
  }

 deleteModels(id:any){
    return this.http.delete(`${this.apiUrl}${id}`);
 }









   private handleError(error: HttpErrorResponse) {
    console.log('error.status',error)
    if (error.status === 0) {
      console.log('An error occurred:', error.error);
    } else {
      console.log(
        `Backend returned requette  code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened hamza; please try again later.'));
  }

}
