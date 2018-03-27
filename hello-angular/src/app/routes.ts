import {LoginComponent} from './login/login.component';
import {TestComponentComponent} from './test-component/test-component.component';
import {RegisterComponent} from './register/register.component';
import {Routes} from '@angular/router';
export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'success', component: TestComponentComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'edit/:id', component: RegisterComponent}
];
