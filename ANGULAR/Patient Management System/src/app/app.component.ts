

import { Component } from '@angular/core';
import { Patient } from './model/Patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Patient';
  patient : Patient;
  result : string;
  patientArr : Patient[];
  flag : boolean;


  constructor(private service : PatientService) {
    this.patient = new Patient();
    this.result = "";
    this.patientArr=[];
    this.flag = false;

  }

  insertPatient(data : any) {
    this.patient.id = data.patientId;
    this.patient.patientName = data.patientName;
    this.patient.patientAge= data.patientAge;
    this.patient.patientCity=data.patientCity;
    this.patient.patientIssue=data.patientIssue;
    this.patient.patientAd=data.patientAd;
    this.patient.patientDd=data.patientDd;


    this.result =this.service.insertPatient(this.patient);
   
  }
  updatePatient(data : any) {
    this.patient.id = data.patientId;
    this.patient.patientName = data.patientName;
    this.patient.patientAge= data.patientAge;
    this.patient.patientCity=data.patientCity;
    this.patient.patientIssue=data.patientIssue;
    this.patient.patientAd=data.patientAd;
    this.patient.patientDd=data.patientDd;

    this.result =this.service.updatePatient(this.patient);
  }

  deletePatient(data : any) {
    this.result =this.service.deletePatient(data.patientId);
  }

  findAllPatient() {
    this.patientArr =this.service.findAllPatient();
    this.flag=true;
  }
  findPatient(data : any) {
    this.patient =this.service.findPatient(data.patientId);
    this.result =this.patient.id+" "+this.patient.patientName+" "+this.patient.patientAge+" "+this.patient.patientCity+" "+this.patient.patientIssue+" "+this.patient.patientDd+" "+this.patient.patientDd;
  }
}
