import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:''
  };
  constructor(private login:LoginService, private router:Router)
   { }
  
 

  ngOnInit(): void {
  }
  formSubmit(){
    console.log("Login btn clicked");


    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      alert("username is required!!");
      return;
    }


  if(this.loginData.password.trim()=='' || this.loginData.password==null){
    alert("password is required!!");
    return;
  }

  //request to server to gernatre token

  this.login.generateToken(this.loginData).subscribe(
    (data:any)=>{
      console.log('success');
      console.log(data);

      //login....
      this.login.loginUser(data.token);
      this.login.getCurrentUser().subscribe(
        (user:any)=>{
          this.login.setUser(user);
          console.log(user);

          //redirect ... admin: admin-dashboard
          if(this.login.getUserrole()=='ADMIN')
          {
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          }else if(this.login.getUserrole()=='Normal')
          {
            this.router.navigate(['user-dashboard/0']);
            this.login.loginStatusSubject.next(true);


          }else{
            this.login.logout();
        
          }

        }
      )
    },
    (error)=>{
      console.log("error");
      Swal.fire("Error","Internal server Error!!")
      console.log(error);
    }
  )


  
  }



}
