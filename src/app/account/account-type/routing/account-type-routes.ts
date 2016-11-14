import { Routes } from "@angular/router";

import { AccountTypeFormComponent } from "../account-type-form/account-type-form.component";
import { AccountTypeListComponent } from "../account-type-list/account-type-list.component";
import { AccountTypeComponent } from "../account-type.component";

export const ACCOUNT_TYPE_ROUTES: Routes = [
  { path: '', component: AccountTypeListComponent },
  { path: 'create', component: AccountTypeFormComponent },
  { path: ':id', component: AccountTypeFormComponent }
];
