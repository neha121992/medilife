import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  loginData: any = "";
  isNewUser: boolean = false;
  @Output() emitAction:EventEmitter<boolean> = new EventEmitter(false);
  
  constructor(private fb: FormBuilder, private http: HttpService) {

  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.signInForm = this.fb.group({
      "userName": [''],
      "password": ['']
    })
  }
  signIn() {
    const endpoint = "users"
    this.http.authentication(endpoint, this.signInForm.value?.userName, this.signInForm.value?.password).subscribe((el: any) => {
      if (el && el.length > 0) {
        this.loginData = el;
        this.isNewUser = false;
        const token = "Betyutui678hhj";
        localStorage.setItem("auth-token", token);
        localStorage.setItem("userDetails", JSON.stringify(el[0]));
        this.emitAction.emit(true);

      } else {
        this.isNewUser = true;

      }
    })
  }
}




