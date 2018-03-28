import { Component, OnInit } from '@angular/core';
import {CredentialsService} from '../services/credentials.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   id: number;
   user: Users;
   private firstName: FormControl;
   private lastName: FormControl;
   private userName: FormControl;
   private password: FormControl;
  registerForm: FormGroup;
  constructor(private credentialService: CredentialsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')) : null;
    this.credentialService.getUserById(this.id).subscribe(data => {
      this.user = data[0];
      this.firstName = new FormControl(this.user ? this.user.firstName : '');
      this.lastName = new FormControl(this.user ? this.user.lastName : '');
      this.userName = new FormControl(this.user ? this.user.userName : '');
      this.password = new FormControl();
      this.registerForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        password: this.password
      });
    });
  }

  cancel() {
     if (this.credentialService.isUserLoggedIn) {
       this.router.navigate(['/success']);
     } else {
       this.router.navigate(['/']);
     }
  }

  register(newUser: Users) {
    let userName: string;
    let password: string;
    userName = newUser.userName;
    password = newUser.password;
    const newCredent: Credential = { userName, password } as Credential;
    if (this.id) {
      Object.assign(this.user, newUser);
      this.user = this.credentialService.updateUser(this.user, newCredent)[0];
    } else {
      this.credentialService.saveUser(newUser, newCredent);
    }
    }
}
