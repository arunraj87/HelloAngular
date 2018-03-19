import { Component, OnInit } from '@angular/core';
import {CredentialsService} from "../services/credentials.service";
import {Router} from "@angular/router";
import * as _ from 'underscore';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String;
  userName: String;
  password: String;
  credentials= [];
  constructor(private credentialService: CredentialsService, private rounter: Router){
  }
  validate(userName,password){
    this.credentialService.getCredentials(this.userName,this.password).subscribe(data => this.credentials = data);
    if(this.credentials.length === 0){
      const credent :Credential = { userName,password} as Credential;
      this.credentialService.saveData(credent).subscribe();
      this.errorMessage="Invalid username or password. Please try again."
    } else {
      this.rounter.navigate(['success']);
    }
  }

  ngOnInit() {

  }

}
