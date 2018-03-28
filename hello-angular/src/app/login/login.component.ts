import { Component, OnInit } from '@angular/core';
import {CredentialsService} from '../services/credentials.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String;
  credentials: Credential;
  userName: string;
  password: string;
  constructor(private credentialService: CredentialsService, private router: Router) {
  }
  validate(formValues: Credential) {
    this.credentialService.getUser(formValues.userName, formValues.password).subscribe(data => {
      this.credentials = data[0];
      if (!this.credentials) {
         this.errorMessage = 'Invalid username or password. Please try again.';
      } else {
        this.credentialService.setUserLoggedInStatus(true);
        this.credentialService.fetchUserDetails(this.credentials.userName, this.credentials.password);
      }
    });
  }
  register() {
    this.router.navigate(['register']);
  }

  ngOnInit() {

  }

}
