import { Routes } from '@angular/router';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AppComponent } from './app.component';
import { ClientmeetingComponent } from './clientmeeting/clientmeeting.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'Add-client', component: AddclientComponent },
    { path: 'client-list', component: ClientlistComponent },
    { path: 'create-meeting', component: ClientmeetingComponent },
    { path: 'meeting-list', component: MeetinglistComponent }
];
