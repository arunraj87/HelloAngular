import { Component, OnInit } from '@angular/core';
import {CredentialsService} from '../services/credentials.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   id: number;
   user: Users;
  constructor(private credentialService: CredentialsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')) : -1;
    this.credentialService.getUserById(this.id).subscribe(data => {
      this.user = data[0];
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
      this.router.navigate(['/success']);
    } else {
      this.credentialService.saveUser(newUser, newCredent);
      this.router.navigate(['/login']);
    }
    }
}
