import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
    qId=0;
    qtitle:any;
    questions:any=[];
    q:any={};
  constructor(private _route:ActivatedRoute, private _question:QuestionsService) { }

  ngOnInit(): void {

    this.qId=this._route.snapshot.params.qid;
    this.qtitle=this._route.snapshot.params.qtitle;

    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        console.log(data);
        this.questions=data;
      },
      (error:any)=>{
        console.log(error);
      }
    )
    
  }
  deleteQuestion(qid:any){
      Swal.fire({
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        title: 'Are you sure , want to delete this question?',
      }).then((result:any) => {
        if (result.isConfirmed) {
          //confim
          this._question.deleteQuestion(qid).subscribe(
            (data) => {
              Swal.fire("question Deleted!!");
              this.questions = this.questions.filter((q:any) => q.quesId != qid);
            },
            (error) => {
              Swal.fire("Error in Deleting");

              console.log(error);
            }
          );
        }
      });
  }

}
