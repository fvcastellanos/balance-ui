import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { AccountTypeService } from '../service/account-type.service';
import { AccountType } from '../models/account-type';

@Component({
  selector: 'balance-account-type-form',
  templateUrl: './account-type-form.component.html'
})
export class AccountTypeFormComponent implements OnInit {

  public accountTypeForm: FormGroup;
  public isNew: boolean = true;
  private _subscription: Subscription;
  private _accountType: AccountType;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _accountTypeService: AccountTypeService) { }

  public ngOnInit(): void {
    this.initializeDefaultForm();
    this.renderForm();
  }

  public onSubmit(): void {
    let accountType = this.accountTypeForm.value;
    if (this.isNew) {
      this._accountTypeService.createAccountType(accountType)
        .subscribe(response => {
          this._router.navigate(['account-types']);
        });
    } else {
      this._accountTypeService.updateAccountType(accountType)
        .subscribe(response => {
          this._router.navigate(['account-types']);
        });;
    }
  }

  public onBack(): void {
    this._router.navigate(['account-types']);
  }

  private initializeDefaultForm(accountType?: AccountType): void {
    this.accountTypeForm = this._formBuilder.group({
      id: accountType ? accountType.id : 0,
      name: accountType ? accountType.name : ''
    });
  }

  private renderForm(): void {
    // Verify if it's for edit
    this._subscription = this._activeRoute.params.subscribe(
      (parameters: Params) => {
        let id: number = +parameters['id']; // (+) Converts string 'id' to a number
        if (id && id > 0) {
          this._accountTypeService.getAccountTypesById(id)
            .subscribe((accountType: AccountType) => {
              this.isNew = false;
              this.initializeDefaultForm(accountType);
            });
        }
      });
  }

}
