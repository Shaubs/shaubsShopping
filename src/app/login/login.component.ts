import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  message = ''


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        EmailID: new FormControl('', [Validators.required, Validators.email]),
        Password: new FormControl('', [Validators.required]),
      }
    )
  }
  register() {
    this.router.navigateByUrl('/register')
  }
  onSubmit() {
    this.http.get(`api/login/${this.loginForm.value.EmailID}/${this.loginForm.value.Password}`).subscribe((res: any) => {
      let k = res.result.message
      if (k == 'Incorrect Password') {
        console.log("okay"); this.loginForm.controls['Password'].reset();
        this.message = k;
        sessionStorage.setItem('auth', 'false')
      }
      if (k == 'Does not exist') { this.loginForm.reset(); this.message = 'User does not exist. Please register'; sessionStorage.setItem('auth', 'false') }
      if (k == 'Valid User') {
        sessionStorage.setItem('auth', 'true')
        this.router.navigateByUrl('/employeeDetails');
      }
    },
      error => {
        console.log(error)
      })

  }
}