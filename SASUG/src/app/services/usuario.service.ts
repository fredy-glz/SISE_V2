import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Usuario} from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL="http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  getUsers (){
    return this.http.get(`${this.API_URL}/DP`);
  }

  getUser(Nua:string){
    return this.http.get(`${this.API_URL}/DP/${Nua}`);
  }

  saveUser(user: Usuario){
    return this.http.post(`${this.API_URL}/DP`,user);

  }

  deleteUser(Nua:string){
     return this.http.delete(`${this.API_URL}/DP/${Nua}`);
  }

  updateUser(Nua:string,updatedUser: Usuario){
     return this.http.put(`${this.API_URL}/DP/${Nua}`,updatedUser);
  }


}
