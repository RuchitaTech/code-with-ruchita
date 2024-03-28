import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
    public logMessage(name: string){
        console.log("New User "+ name + " has been added");
    } 
}