import {Component, Input, OnInit} from '@angular/core';
import {CredentialsService} from '../services/credentials.service';

@Component({
  selector: 'valid-user',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  chant: String = 'Come on you Gunners!';
  firstName: string;
  lastName: string;
  userDetails = [];

  constructor(private credentialService: CredentialsService) {

  }

  ngOnInit() {
    this.userDetails = this.credentialService.getUserDetails();
    if (this.userDetails.length > 0) {
      this.firstName = this.userDetails[0].firstName;
      this.lastName = this.userDetails[0].lastName;
    }
  }
}
