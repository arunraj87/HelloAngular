import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CredentialsService} from './services/credentials.service';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { appRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
