import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Model/user';


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

getAllData(){
  console.log("inside the getAll function:::::")
  return this.http.get('http://localhost:3000/fetch');
}

deleteData(id:number){
  console.log("before delete function::::")
  return this.http.delete('http://localhost:3000/deleteUser/'+id);
  
}
updateUser(user:user){
  console.log("updating user::::::",user)

}

}
