import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { AccountTypeService } from '../service/account-type.service'
import { AccountType } from '../models/account-type'

@Component({
  selector: 'balance-account-type-list',
  templateUrl: './account-type-list.component.html',
})
export class AccountTypeListComponent implements OnInit {

  public accountTypes: AccountType[];

  constructor(private _router: Router,
    private _accountTypeService: AccountTypeService) {
  }

  public ngOnInit(): void {
    this.getAccountTypes();
  }

  public onDelete(event, id: number, index: number): boolean {
    this._accountTypeService.deleteAccountType(id)
      .subscribe(response => {
        this.accountTypes.splice(index, 1);
      });

    return false;
  }

  private getAccountTypes(): void {
    this._accountTypeService.getAccountTypes()
      .subscribe((response: AccountType[]) => {
        this.accountTypes = response;
      });
  }

}
