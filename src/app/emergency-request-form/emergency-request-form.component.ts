import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-request-form',
  templateUrl: './emergency-request-form.component.html',
  styleUrls: ['./emergency-request-form.component.scss']
})
export class EmergencyRequestFormComponent {
 
  emergencyRequestForm = new FormGroup({
    typeOfRequest: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('',[Validators.required]),
    pinLocation: new FormControl('', [Validators.required])
  });

  typeOfRequestList: string[] = [
    'Medical Assistance and Ambulance',
    'Police',
    'Resque Team',
    'Fire Brigade',
    'Food & Utilities Team',
    'Local Community Team',
    'Terrorist Handling and Bomb defusing team'
  ];

  constructor(
    private router: Router
  ){

  }
  offlineSupport(){
    this.router.navigate(['offline-support']);
  }

  emergencyRequestFormSubmit(){

  }
}
