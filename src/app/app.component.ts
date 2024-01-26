import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { RouterModule } from '@angular/router';
import { ClientmeetingComponent } from './clientmeeting/clientmeeting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,AddclientComponent,ClientlistComponent,RouterModule,ClientmeetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
