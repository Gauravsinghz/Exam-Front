import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  
  constructor(private http:HttpClient) { }

  //GET all  questions of quiz(used by Admin)
  public getQuestionsOfQuiz(qid:any){
  
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`,qid);
  }

  //add question

  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`,question);
  }

  public deleteQuestion(questionID:any){
    return this.http.delete(`${baseUrl}/question/${questionID}`);
  }

  //get quizz question for user used my user
  public getQuestionsOfQuizForTEST(qid:any){
  
    return this.http.get(`${baseUrl}/question/quiz/${qid}`,qid);
  }
  
  //eval quiz
  public evalQuiz(questions:any) {
    return this.http.post(`${baseUrl}/question/eval-quiz`, questions);
  }
}
