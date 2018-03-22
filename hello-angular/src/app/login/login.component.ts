import { Component, OnInit } from '@angular/core';
import {CredentialsService} from '../services/credentials.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String;
  credentials = [];
  userName: string;
  password: string;
  constructor(private credentialService: CredentialsService, private rounter: Router) {
  }
  validate(formValues: Credential) {
    this.credentialService.getUser(formValues.userName, formValues.password).subscribe(data => {
      this.credentials = data;
      if (this.credentials.length === 0) {
         // const credent: Credential = formValues.map()
         // this.credentialService.saveData(formValues).subscribe();
        this.errorMessage = 'Invalid username or password. Please try again.';
      } else {
        this.rounter.navigate(['success']);
      }
    });

  }

  ngOnInit() {

  }

}
