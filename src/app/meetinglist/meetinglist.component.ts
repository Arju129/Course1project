import { Component, OnInit } from '@angular/core';
import { Clientmeeting } from '../clientmeeting';
import { MeetingService } from '../meeting.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meetinglist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './meetinglist.component.html',
  styleUrl: './meetinglist.component.scss'
})
export class MeetinglistComponent implements OnInit {

  meeting:Clientmeeting[]=[];  
  meetingservice: MeetingService;

  constructor(meetingservice: MeetingService){
    this.meetingservice=meetingservice;        
  }

  ngOnInit(): void {
    console.log('ClientlistComponent initialized');
    this.meetingservice.getallmeetings().subscribe((meeting) => {
      console.log('Fetched meetings:', meeting);
      this.meeting = meeting;
    });
  }

}
