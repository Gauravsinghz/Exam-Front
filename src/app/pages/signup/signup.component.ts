import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

  };

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username==''|| this.user.username==null)
    {
      alert('user is required!!');
      return;
    }

    //addUser

   this.userService.addUser(this.user).subscribe(
    (data:any)=>{
      //success
      console.log(data);
      Swal.fire("Successfully done!!","User id is"+ data.id);
    },
    (error)=>{

      console.log(error);
      alert("Something went wrong");

    }
   )
  }

}
