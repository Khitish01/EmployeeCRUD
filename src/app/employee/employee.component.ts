import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  
  
  employeeForm= new FormGroup({
    fullname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    designation: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    check: new FormControl('')
  });
  jsondata: any;
  
  constructor(private fb:FormBuilder,private service:EmployeeService) {  }


  
  onSubmit(){
    this.jsondata=JSON.stringify(this.employeeForm.value);
    console.log(this.jsondata);
    this.service.postEmployee(this.employeeForm.value).subscribe( (res) => {

    });
  }

  
  ngOnInit(): void {
    const btn = document.querySelector('.btn') as HTMLButtonElement;
    const btn1 = document.querySelector('.close-modal') as HTMLButtonElement;
    const modal = document.querySelector('.card') as HTMLDivElement;
    const background = document.querySelector('.background-modal') as HTMLDivElement;

    const openModal = () => {
      modal.classList.remove('d-none');
      background.classList.remove('d-none');
    };
    const closeModal = () => {
      modal.classList.add('d-none');
      background.classList.add('d-none');
    };

    btn.addEventListener('click', openModal);
    btn1.addEventListener('click',closeModal);
    background.addEventListener('click',closeModal);
  }










  // public get FullName(): FormControl {
  //   return this.employeeForm.get('fullname') as FormControl;
  // }
  // public get PhoneNumber(): FormControl {
  //   return this.employeeForm.get('phone') as FormControl;
  // }
  // public get Email(): FormControl {
  //   return this.employeeForm.get('email') as FormControl;
  // }
  // public get DOB(): FormControl {
  //   return this.employeeForm.get('dob') as FormControl;
  // }
  // public get Designation(): FormControl {
  //   return this.employeeForm.get('designation') as FormControl;
  // }
  // public get gender(): FormControl {
  //   return this.employeeForm.get('gender') as FormControl;
  // }
  // public get Password(): FormControl {
  //   return this.employeeForm.get('password') as FormControl;
  // }
  // public get ConfirmPassword(): FormControl {
  //   return this.employeeForm.get('confirmpassword') as FormControl;
  // }
  // public get Checkbox(): FormControl {
  //   return this.employeeForm.get('salary') as FormControl;
  // }
}
