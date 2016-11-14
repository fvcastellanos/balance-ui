import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BalanceAppComponent } from './balance.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccountTypeComponent } from './account/account-type/account-type.component';
import { AccountTypeListComponent } from './account/account-type';
import { AccountTypeFormComponent } from './account/account-type';

import { AccountTypeService } from './account/account-type';

import { MAIN_ROUTES } from './balance.routes';

@NgModule({
  declarations: [
    BalanceAppComponent,
    HeaderComponent,
    AccountTypeListComponent,
    AccountTypeFormComponent,
    AccountTypeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers: [AccountTypeService],
  bootstrap: [BalanceAppComponent]
})
export class AppModule { }
