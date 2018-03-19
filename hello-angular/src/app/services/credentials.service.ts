import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CredentialsService{
  private _url: string = 'http://localhost:3000/users';
  private httpOptions = {};
  constructor(private httpClient: HttpClient){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }
saveData(credential: Credential){
  return this.httpClient.post(this._url,credential,this.httpOptions);
}
  getCredentials(username :String, password :String){
    return this.httpClient.get<Credential[]>(this._url+'?userName='+username+'&password='+password);
  }
}

