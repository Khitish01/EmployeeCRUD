import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
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

  constructor(private service: EmployeeService,private fb:FormBuilder) {}

  // postdata
  onSubmit() {
    this.service.postEmployee(this.employeeForm.value).subscribe((res) => {
      alert("Data added successfully!");
      this.employeeForm.reset();
    });
  }
  
  updateData(data:any){
    const btn3= document.querySelectorAll('.edit');
    const modal = document.querySelector('.card') as HTMLDivElement;
    const background = document.querySelector(
      '.background-modal'
    ) as HTMLDivElement;
    for(let i=0;i<btn3.length;i++)
    {
      btn3[i].addEventListener('click',()=>{
        modal.classList.remove('d-none');
        background.classList.remove('d-none');
        this.service.getEmployee().subscribe((res: any) => {
          this.employeeData = res;
        });
        console.log(this.employeeData[i]);
        // return this.employeeData[i];
        if(this.employeeData[i]){
          this.employeeForm.controls['fullname'].setValue(this.employeeData[i].fullname)
          this.employeeForm.controls['phone'].setValue(this.employeeData[i].phone)
          this.employeeForm.controls['email'].setValue(this.employeeData[i].email)
          this.employeeForm.controls['dob'].setValue(this.employeeData[i].dob)
          this.employeeForm.controls['designation'].setValue(this.employeeData[i].designation)
          this.employeeForm.controls['gender'].setValue(this.employeeData[i].gender)
          this.employeeForm.controls['password'].setValue(this.employeeData[i].password)
          this.employeeForm.controls['confirmpassword'].setValue(this.employeeData[i].confirmpassword)
        }
      })
    }
  }
  employeeData: any = ['', '', '', '', '', '', ''];

  ngOnInit(): void {
    const btn = document.querySelector('.btn') as HTMLButtonElement;
    const btn1 = document.querySelector('.close-modal') as HTMLButtonElement;
    const btn2 = document.querySelector('.submit-button') as HTMLButtonElement;
    // const btn3 = document.querySelector('.edit') as HTMLButtonElement;
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
    background.addEventListener('click', closeModal);
    
    // getdata
    this.service.getEmployee().subscribe((res) => {
      this.employeeData = res;
      // console.log(this.employeeData[0]);
      btn2.addEventListener('click', closeModal);
    });

    
  }
}
