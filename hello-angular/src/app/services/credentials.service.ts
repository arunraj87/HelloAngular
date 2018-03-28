import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class CredentialsService {
  private _url: string = 'api/';
  private httpOptions = {};
  public isUserLoggedIn: Boolean = false;
  private response: Observable<Credential[]>;
  private userDetail ;
  private newUser: Users;
  constructor(private httpClient: HttpClient, private router: Router,) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }
  saveUser(userData: Users, credential: Credential) {
    this.httpClient.post<Credential>(this._url + 'credentials', credential, this.httpOptions).subscribe(data => console.log(data));
    this.httpClient.post<Users>(this._url + 'usersDetails', userData, this.httpOptions).subscribe(
      data => {
        this.fetchUsers();
        this.router.navigate(['/login']);
      });
  }

  updateUser(userData: Users, credential: Credential) {
    // this.httpClient.put<Credential>(this._url + 'credentials', credential, this.httpOptions).subscribe(data => console.log(data));
     this.httpClient.put<Users[]>(this._url + 'usersDetails', userData, this.httpOptions).subscribe(data => {
       this.userDetail = data;
       this.router.navigate(['/success']);
     });
     return this.userDetail;
  }

  fetchLinks() {
    return this.httpClient.get<Links[]>(this._url + 'sampleURLS');
  }

  fetchUsers() {
    this.httpClient.get<Users[]>(this._url + 'usersDetails').subscribe(data => console.log(data));
  }

  getUserById(id): Observable<Users> {
    const options = {params: new HttpParams().append('id', id)};
    return this.httpClient.get<Users>(this._url + 'usersDetails', options);
  }

  getUser(username: string, password: string): Observable<Credential[]> {
    const options = {params: new HttpParams().append('userName', username).append('password', password)};
    this.response = this.httpClient.get<Credential[]>(this._url + 'credentials', options);
    if (this.response) {
      this.isUserLoggedIn = true;
      this.fetchUserDetails(username, password);
    }
    return this.response;
  }
  fetchUserDetails(username: string, password: string) {
      const options = {params: new HttpParams().append('userName', username).append('password', password)};
      this.httpClient.get<Users[]>(this._url + 'usersDetails' , options ).subscribe(data => this.userDetail = data[0]);
  }
  getUserDetails() {
    return this.userDetail;
  }

  logout() {
    this.isUserLoggedIn = false ;
  }
}

