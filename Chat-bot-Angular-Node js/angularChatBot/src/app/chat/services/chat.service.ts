import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/model/message.model';
import { ResponseMessage } from 'src/app/model/response-message.model';
import { TextMessage } from 'src/app/model/text-message.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin":"*"
    })
  };

  // protected chatBotServicedata$: BehaviorSubject<ResponseMessage> = new BehaviorSubject<ResponseMessage>(1);
  // public chatBotServicedata = this.chatBotServicedata$.asObservable();

  public sendMessage(textMessage: TextMessage){
    var reqBody = {
      "projectId": environment.dialogflow.projectId,
      "requestText":textMessage.text
    }
    return this.http.post(environment.backend.requestTextUrl, reqBody, this.httpOptions);

  }
}
