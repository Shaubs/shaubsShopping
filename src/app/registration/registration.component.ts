import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup = new FormGroup({});
  message = '';
  check = '';

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.regForm = new FormGroup(
      {
        FirstName: new FormControl('', [Validators.required]),
        LastName: new FormControl('', [Validators.required]),
        EmailID: new FormControl('', [Validators.required, Validators.email]),
        Password: new FormControl('', [Validators.required]),
        EmployeeID: new FormControl('', [Validators.required]),
        OrganizationName: new FormControl('', [Validators.required])
      }
    )
  }
  login() { this.route.navigateByUrl('/login') }

  onSubmit() {
    var data = JSON.stringify(this.regForm.value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.get(`api/register/${this.regForm.value.EmailID}`).subscribe((res: any) => {
      this.check = res.result;
      if (this.check == 'Present') { this.message = 'Account already exists. Please Login'; this.regForm.reset() }
      if (this.check == 'Not') {
        this.http.post(`api/register`, data, httpOptions).subscribe((res: any) => {
          console.log(res, res.result)
          if (res.result == 'Done') { this.message = 'Account created. Please Login'; this.regForm.reset() }
        })

      }
    })

  }
}