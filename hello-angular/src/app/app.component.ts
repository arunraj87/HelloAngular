import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CredentialsService} from '../app/services/credentials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arsenal FC';
  constructor(public router: Router, public service: CredentialsService){
   }

   logout() {
    this.service.logout();
   }
}

