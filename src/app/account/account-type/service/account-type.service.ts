import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AccountType } from '../models/account-type';

@Injectable()
export class AccountTypeService {

  private _accountTypeResource: string = "http://127.0.0.1:5000/api/account-types";
  private _accountType: AccountType;

  constructor(private _http: Http) { }

  public getAccountTypes(): Observable<AccountType[]> {
    return this._http.get(this._accountTypeResource)
      .map((response: Response) => response.json());
  }

  public getAccountTypesById(id: number): Observable<AccountType> {
    return this._http.get(this._accountTypeResource.concat("/id/" + id))
      .map((response: Response) => response.json())
  }

  public createAccountType(accountType: AccountType): Observable<AccountType> {
    let accountTypeSerialized = JSON.stringify(accountType);

    return this._http.post(this._accountTypeResource, accountTypeSerialized, this.getHeaderOptions())
      .map((response: Response) => response.json());
  }

  public updateAccountType(accountType: AccountType): Observable<AccountType> {
    let accountTypeSerialized = JSON.stringify(accountType);
    return this._http.put(this._accountTypeResource, accountTypeSerialized, this.getHeaderOptions())
      .map((response: Response) => response.json());
  }

  public deleteAccountType(id: number): Observable<number> {
    return this._http.delete(this._accountTypeResource.concat("/" + id))
      .map((response: Response) => response.json());
  }

  private getHeaderOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });

    return requestOptions;
  }

}
