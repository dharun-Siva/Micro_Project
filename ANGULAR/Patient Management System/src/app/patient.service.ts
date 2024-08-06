// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Employee } from './model/Patient';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {
//   url : string;
//   employeeArr : Employee[];
//   employee : Employee;
  


//   constructor(private http: HttpClient) { 
//     this.url = 'http://localhost:3004/employees';
//     this.employeeArr=[];
//     this.employee=new Employee();
//   }

//   insertEmployee(employee:Employee) {
//     this.http.post<Employee>(this.url, employee).subscribe();
//     return "Employee Details Added";
//   }

//   updateEmployee(employee:Employee) {
//     this.http.put<Employee>(this.url+"/"+employee.id, employee).subscribe();
//     return "Employee Details Updated";
//   }

//   deleteEmployee(empId:number) {
//     this.http.delete<Employee>(this.url+"/"+empId).subscribe();
//     return "Employee Details Deleted";
//   }

//   findAllEmployee() {
//     this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr = data);
//     return this.employeeArr;

//   }
//   findEmployee(empId : number) {
//     this.http.get<Employee>(this.url+"/"+empId).subscribe(data => this.employee = data);
//     return this.employee;

//   }
// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url : string;
  patientArr : Patient[];
  patient : Patient;
  


  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3004/patients';
    this.patientArr=[];
    this.patient=new Patient();
  }

  insertPatient(patient:Patient) {
    this.http.post<Patient>(this.url, patient).subscribe();
    return "Patient Details Added";
  }

  updatePatient(patient:Patient) {
    this.http.put<Patient>(this.url+"/"+patient.id, patient).subscribe();
    return "Patient Details Updated";
  }

  deletePatient(patientId:number) {
    this.http.delete<Patient>(this.url+"/"+patientId).subscribe();
    return "Patient Details Deleted";
  }

  findAllPatient() {
    this.http.get<Patient[]>(this.url).subscribe(data => this.patientArr = data);
    return this.patientArr;

  }
  findPatient(patientId : number) {
    this.http.get<Patient>(this.url+"/"+patientId).subscribe(data => this.patient = data);
    return this.patient;
  }
}


