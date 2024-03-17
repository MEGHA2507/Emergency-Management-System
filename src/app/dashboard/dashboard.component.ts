import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // selectedValue: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
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
