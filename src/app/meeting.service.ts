import { Injectable } from '@angular/core';
import { Clientmeeting } from './clientmeeting';
import { Observable,of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';






@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meeting!: Clientmeeting[];

  constructor() {
    this.meeting=[
      new Clientmeeting("projectplannig",5,"2022-01-18 T:02:30PM"),
      new Clientmeeting("deadline",7,"2022-01-18 T:10:30PM"),
      new Clientmeeting("designing",9,"2022-01-18 T:05:45PM"),
      new Clientmeeting("marketing",25,"2022-01-18 T:04:30PM")
    ]

   }

   

   createmeeting=(Meetingtopic:String,Numberofpeople:Number,Starttime:String):void=>
   {
     let new_meeting : Clientmeeting = new Clientmeeting(Meetingtopic,Numberofpeople,Starttime);
     this.meeting.push(new_meeting); 
     
   }

   getallmeetings=(): Observable <Clientmeeting[]>=> {
    return of(this.meeting);
  }
 
}
