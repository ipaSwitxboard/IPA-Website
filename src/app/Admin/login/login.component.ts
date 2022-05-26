import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserEntity} from "../../Entities/user.entity";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private  router: Router
  ) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }

  async login() {
    const user: UserEntity = {
      email: this.email?.value,
      password: this.password?.value
    }
    await this.authService.login(user);
    if(localStorage.getItem('token')){
      await this.router.navigateByUrl('USA');
    }
    else {
      console.log('sign in failed');
    }
  }
}
