import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AccountTypeListComponent } from "./account/account-type";
import { AccountTypeComponent } from "./account/account-type/account-type.component";
import { ACCOUNT_TYPE_ROUTES } from "./account/account-type";

export const MAIN_ROUTES: Routes = [
  { path: 'account-types', component: AccountTypeComponent, children: ACCOUNT_TYPE_ROUTES },
  { path: '', component: HomeComponent }
];