import { Component } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { NgZone } from '@angular/core';



@Component({
  selector: 'clientmeeting',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './clientmeeting.component.html',
  styleUrl: './clientmeeting.component.scss'
})
export class ClientmeetingComponent {meetingForm!: FormGroup;

  meetingservice!: MeetingService;
  meetingcreationSuccess: boolean = false;


  constructor(private fb: FormBuilder, meetingservice: MeetingService) {
    this.meetingservice = meetingservice;

    this.meetingForm = this.fb.group({
      Meetingtopic: ['', [Validators.required]],
      Numberofpeople: ['', [Validators.required]],
      Starttime: [null, [Validators.required]]
    
    });
  }


  createmeeting(): void {
    this.meetingservice.createmeeting(
      this.meetingForm.value.Meetingtopic,
      this.meetingForm.value.Numberofpeople,
      this.meetingForm.value.Starttime
      
    );



   



  console.log('Form Value:', this.meetingForm.value);
  console.log('Form Errors:', this.meetingForm.errors);

  console.log('Data stored in Meetingservice:', this.meetingservice.getallmeetings());

  alert('Meeting added successfully');

  
    this.meetingcreationSuccess = true;

  

  }


}
