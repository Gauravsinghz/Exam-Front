import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
categories=[{
  cid:'',
  title:'',

}];

quizData={
  title:'',
  description:'',
  maxMarks:'',
  numberOfQuestions:'',
  active:true,
  category:{
    cid:''
  }
}
  constructor(private _cat:CategoryService,private _quiz:QuizService) { }

  ngOnInit(): void {
    
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!!','error in loading data from server');
      }
    );

  }
  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title.trim()==null){
      Swal.fire('Title Required!!');
      return;
    }


    //if data is there  
    this._quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire("Success,quiz is added");
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            cid:''
          }
        };
      },
      (error:any)=>{
      console.log(error);
       Swal.fire("Error!","error while adding quiz");
      });
    

  }

}
