import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule,AbstractControl } from '@angular/forms';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'addclient',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addclient.component.html',
  styleUrl: './addclient.component.scss'
})

export class AddclientComponent {clientForm!: FormGroup;


  clientService!: ClientService;
  registrationSuccess: boolean = false;


  constructor(private fb: FormBuilder, clientService: ClientService) {
    this.clientService = clientService;

    this.clientForm = this.fb.group({
      clientName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      RepeatPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator
    });

  }

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log('passwordMatchValidator called');
    const password = control.get('Password')?.value;
    const repeatPassword = control.get('RepeatPassword')?.value;

    console.log('Password:', password);
    console.log('RepeatPassword:', repeatPassword);

    if (password !== repeatPassword) {
      console.log('Passwords do not match');
      return { 'passwordMismatch': true };
    }

    console.log('Passwords match');
    return null;
  }


  addClient(): void {

    console.log('Form Value:', this.clientForm.value);

    if (this.clientForm.invalid) {
      console.log('Form Errors:', this.clientForm.errors);
      return;
    }

    this.clientService.addClient(
      this.clientForm.value.clientName,
      this.clientForm.value.Email,
      this.clientForm.value.Address,
      this.clientForm.value.Password,
      this.clientForm.value.RepeatPassword
    );



  console.log('Form Value:', this.clientForm.value);
  console.log('Form Errors:', this.clientForm.errors);

  console.log('Data stored in ClientService:', this.clientService.getallclients());
  alert('Successfully registered');
    this.registrationSuccess = true;

  }


}