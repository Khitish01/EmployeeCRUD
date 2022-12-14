import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm = new FormGroup({
    fullname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    designation: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    check: new FormControl(''),
  });
  jsondata: any;

  constructor(private fb: FormBuilder, private service: EmployeeService) {}

  // postdata
  onSubmit() {
    this.jsondata = JSON.stringify(this.employeeForm.value);
    console.log(this.jsondata);
    this.service.postEmployee(this.employeeForm.value).subscribe((res) => {});
  }

  // column = [
  //   'Full Name',
  //   'Phone Number',
  //   'Email	DOB',
  //   'Designation',
  //   'Gender',
  //   'Password',
  //   'Actions',
  // ];

  index: any = ['', '', '', '', '', '', ''];

  ngOnInit(): void {
    const btn = document.querySelector('.btn') as HTMLButtonElement;
    const btn1 = document.querySelector('.close-modal') as HTMLButtonElement;
    const btn2 = document.querySelector('.submit-button') as HTMLButtonElement;
    const modal = document.querySelector('.card') as HTMLDivElement;
    const background = document.querySelector(
      '.background-modal'
    ) as HTMLDivElement;

    const openModal = () => {
      modal.classList.remove('d-none');
      background.classList.remove('d-none');
    };
    const closeModal = () => {
      modal.classList.add('d-none');
      background.classList.add('d-none');
    };

    btn.addEventListener('click', openModal);
    btn1.addEventListener('click', closeModal);
    btn2.addEventListener('click', closeModal);
    background.addEventListener('click', closeModal);

    this.service.getEmployee().subscribe((res) => {
      this.index = res;
      console.log(this.index[0]);
    });
  }
}
