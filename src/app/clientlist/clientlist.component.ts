import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'clientlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.scss'
})
export class ClientlistComponent implements OnInit {

  clients:Client[]=[];  
  clientservice: ClientService;

  constructor(clientservice: ClientService){
    this.clientservice=clientservice;        
  }

  ngOnInit(): void {
    console.log('ClientlistComponent initialized');
    this.clientservice.getallclients().subscribe((clients) => {
      console.log('Fetched clients:', clients);
      this.clients = clients;
    });
  }

}
