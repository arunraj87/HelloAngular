import {Component, Input, OnInit} from '@angular/core';
import {CredentialsService} from '../services/credentials.service';
import {Router} from '@angular/router';

@Component({
  selector: 'valid-user',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  chant: String = 'Come on you Gunners!';
  firstName: string;
  lastName: string;
  id: number;
  userDetails: Users;
  links = [];

  constructor(private credentialService: CredentialsService, private router: Router) {

  }

  ngOnInit() {
    this.userDetails = this.credentialService.getUserDetails();
    this.credentialService.fetchLinks().subscribe(data => this.links = data);
    if (this.userDetails) {
      this.firstName = this.userDetails.firstName;
      this.lastName = this.userDetails.lastName;
      this.id = this.userDetails.id;
    }
  }
}
