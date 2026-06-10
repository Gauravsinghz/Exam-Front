import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();
  constructor( private http: HttpClient) { }

  // current user

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }


  //genrate token

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData)
  }

  //login user:set token on local strorage

  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  //isLogin: user is loged in or not
  public isLoggedIn(){
    let tokenstr=localStorage.getItem('token')
    if(tokenstr==undefined || tokenstr=='' || tokenstr==null){
    return false;
  }else{
      return true;
    }
}

//logout : reomve token from local storage

public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  return true;

}

//get token
public getToken(){
  return localStorage.getItem('token');
}

// set user details

public setUser(user: any){
  localStorage.setItem('user',JSON.stringify(user));
}

// getuser
public getUser(){
  let userstr=localStorage.getItem("user");
  if(userstr!=null){
    return JSON.parse(userstr);
  }else{
    this.logout();
    return null;
  }

}

//get user role 
public getUserrole(){
  let user=this.getUser();
  return user.authorities[0].authority;

}


}
