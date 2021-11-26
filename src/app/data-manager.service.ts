import { Injectable } from '@angular/core';
import { GameInfo } from './Game';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  loginResult:any = {
    success : false,
    username: ""
  }

  constructor(private http: HttpClient) { }

  getGameInfo(): Observable<GameInfo[]> {
   /*  return this.http.get<GameInfo[]>('http://localhost:3333/result') */
   return this.http.get<GameInfo[]>('https://yinodes.herokuapp.com/result') 
  }
  getDetail(id:number): Observable<GameInfo> {
    /* return this.http.get<GameInfo>(`http://localhost:3333/detail/${id}`) */
    return this.http.get<GameInfo>(`https://yinodes.herokuapp.com/detail/${id}`) 
  }


 async userLogin2(user:any){

  /*   return  this.http.post<any>(`http://localhost:3333/login?userName=${user.username}&password=${user.password}`,{ */
  return  this.http.post<any>(`https://yinodes.herokuapp.com/login?userName=${user.username}&password=${user.password}`,{ 

   }) .toPromise()
   .then((response) => response);
  
     
  }
  setloginInfo(user:any){
   this.loginResult = user
  }
  getloginInfo():any{
    return this.loginResult 
  }

}

