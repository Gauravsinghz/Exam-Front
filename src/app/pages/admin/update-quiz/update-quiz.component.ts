import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute, private _quiz:QuizService,private _cat:CategoryService, private router:Router) { }
  qId=0;
  quiz:any={};

  categories:any;


  ngOnInit(): void {
    this.qId=this.route.snapshot.params.qid;
   // alert(this.qId);

   this._quiz.getQuiz(this.qId).subscribe(
    (data:any)=>{
      this.quiz=data;
      console.log(this.quiz);
    },
    (error:any)=>{
   console.log(error);
    }
   );

   this._cat.categories().subscribe(
    (data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error:any)=>{
      alert("error in loading the data");
    }
   )
  }

  //update fomr

  public updateData(){
    this._quiz.updateQuiz(this.quiz).subscribe(
  (data:any)=>{
      Swal.fire("success!!","quiz updated").then((e)=>{
        this.router.navigate(['/admin/quizzes']);
      })
  },
  (error:any)=>{
    Swal.fire("error occured!!");
   console.log(error);
  }

    )
  }

}
