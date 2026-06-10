import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid:any;
  questions:any={

 };
 marksGot=0;
 correctAnswers=0;
 attempted=0;
 isSubmit = false;
 timer: any;

  constructor(private locationst:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionsService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this._route.snapshot.params.qid;
    console.log(this.qid);
    this.loadQuestions();

    
  }
  loadQuestions(){
    this._question.getQuestionsOfQuizForTEST(this.qid).subscribe((data:any)=>{
      this.questions=data;
    

      this.timer = this.questions.length * 2 * 60;

      console.log(this.questions);
      this.startTimer();

     
    }
    ,
    (error:any)=>{
      console.log(error);
      Swal.fire("Error in Loading Quiz");
    })
        }
  preventBackButton(){
    history.pushState(null, '', window.location.href);
    this.locationst.onPopState(() => {
      history.pushState(null, '', window.location.href);
    });
    }

    submitQuiz() {
      Swal.fire({
        title: 'Do you want to submit the quiz?',
        showCancelButton: true,
        confirmButtonText: `Submit`,
        icon: 'info',
      }).then((e) => {
        if (e.isConfirmed) {
          this.evalQuiz();
        }
      });
    }
    getFormattedTime() {
      let mm = Math.floor(this.timer / 60);
      let ss = this.timer - mm * 60;
      return `${mm} min : ${ss} sec`;
    }

    evalQuiz() {
      //calculation
      //call to sever  to check questions


      this._question.evalQuiz(this.questions).subscribe(
        (data: any) => {
          console.log(data);
          this.marksGot = data.marksGot;
          this.correctAnswers = data.correctAnswers;
          this.attempted = data.attempted;
          this.isSubmit = true;
        },
        (error :any) => {
          console.log(error);
        }
      );
      // this.isSubmit = true;
    // this.questions.forEach((q) => {
    //   if (q.givenAnswer == q.answer) {
    //     this.correctAnswers++;
    //     let marksSingle =
    //       this.questions[0].quiz.maxMarks / this.questions.length;
    //     this.marksGot += marksSingle;
    //   }
    //   if (q.givenAnswer.trim() != '') {
    //     this.attempted++;
    //   }
    // });
    // console.log('Correct Answers :' + this.correctAnswers);
    // console.log('Marks Got ' + this.marksGot);
    // console.log('attempted ' + this.attempted);
    // console.log(this.questions);
  }
  startTimer() {
    let t = window.setInterval(() => {
      //code
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  printPage(){
    window.print();
  }

}
