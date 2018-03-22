import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CredentialsService {
  private isUserLoggedIn = false;
  private _url: string = 'api/';
  private httpOptions = {};
  private response = new Observable<Credential[]>;
  private userDetail = [];
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }
saveData(credential: Credential) {
  return this.httpClient.post(this._url, credential, this.httpOptions);
}
  getUser(username: string, password: string): Observable<Credential[]> {
    const options = {params: new HttpParams().append('userName', username).append('password', password)};
    this.response = this.httpClient.get<Credential[]>(this._url + 'credentials', options);
    if (this.response) {
      this.fetchUserDetails(username, password);
    }
    return this.response;
  }
  fetchUserDetails(username: string, password: string) {
      const options = {params: new HttpParams().append('userName', username).append('password', password)};
      this.httpClient.get<Users[]>(this._url + 'usersDetails' , options ).subscribe(data => this.userDetail = data);
  }
  getUserDetails() {
    return this.userDetail;
  }
}

