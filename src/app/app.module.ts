import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ClientService } from './client.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { RouterModule,Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientmeetingComponent } from './clientmeeting/clientmeeting.component';
import { MeetingService } from './meeting.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
      AppComponent,
      AddclientComponent,
      ClientlistComponent,
      ClientmeetingComponent
      
    ],
    providers:[MeetingService,ClientService,provideRouter(routes, withComponentInputBinding())],
    imports: [ToastrModule.forRoot(),FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }