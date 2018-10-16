import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './Model/user';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  show:boolean;
  constructor(private http:HttpClient) { }

register(user:user){
 this.show=true;
  console.log("user::::::::::::::::::::::",user)

return this.http.post('http://localhost:3000/register',user);

}

}
