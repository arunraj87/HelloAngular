import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CredentialsService} from './services/credentials.service';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
