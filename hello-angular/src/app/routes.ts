import {LoginComponent} from "./login/login.component";
import {TestComponentComponent} from "./test-component/test-component.component";
import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
export const appRoutes:Routes =[
  {path:'login',component: LoginComponent},
  {path:'success', component: TestComponentComponent}
];
