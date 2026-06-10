import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:''
  };

  constructor(private _category:CategoryService, ) { }

  ngOnInit(): void {
  }
   formSubmit(){

    if(this.category.title.trim()=='' || this.category.title==null)
    {
      Swal.fire("Title Required!!");
      return;
    }

    //all done

    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("Success!!","Category is added successfully")
      },
      (error)=>{
      console.log(error);
      Swal.fire("Error!!");
      }
      
    )
   }

}
