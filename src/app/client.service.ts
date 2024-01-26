import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients! : Client[];


  constructor() { 
    this.clients=[
      new Client("sara","sara@gmail.com","35 sara house","sara123","sara123"),
      new Client("saini","saini@gmail.com","19 saini house","saini123","saini123"),
      new Client("Jack","Jack@gmail.com","27 Jack house","Jack123","Jack123"),
      new Client("Jhon","Jhon@gmail.com","39 Jhon house","Jhon123","Jhon123")
    ]  
    
  }


  addClient=(clientName:String,Email:String,Address:String,Password:String,RepeatPassword:String):void=>
  {
    let new_client : Client = new Client(clientName,Email,Address,Password,RepeatPassword);
    this.clients.push(new_client); 
  }

  getallclients=(): Observable <Client[]>=> {
    return of(this.clients);
  }

  
  
}
