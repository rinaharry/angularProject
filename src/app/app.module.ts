import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule, ModalModule, TooltipModule } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { AuthenticationService } from './services/authentication.service';
import { AuthorizationService } from './services/authorization.service';
import { AuthenticationGuard  } from './authentication.guard';
import { AuthorizationGuard } from './authorization.guard';

import { adminLteConf } from '../admin-lte.conf';
import { LayoutModule, BoxModule, DropdownModule } from 'angular-admin-lte';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';


import { AppErrorHandler } from './common/app-error-handler';
import { UserService } from './services/user.service';

import { TopMenuComponent } from './template/admin/top-menu/top-menu.component';
import { FooterLeftComponent } from './template/admin/footer-left/footer-left.component';
import { FooterRightComponent } from './template/admin/footer-right/footer-right.component';
import { SearchLeftComponent } from './template/admin/search-left/search-left.component';
import { UserLeftComponent } from './template/admin/user-left/user-left.component';


import { ThanksComponent } from './template/admin/sidebar-right/thanks/thanks.component';
import { RouterModule } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    NotFoundComponent,
    NoAccessComponent,
    AddUserComponent,
    TopMenuComponent,
    FooterLeftComponent,
    FooterRightComponent,
    SearchLeftComponent,
    UserLeftComponent,
    ThanksComponent,
    RegistreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule.forRoot(adminLteConf),
    BoxModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'x-auth-token',
        authScheme: null
      }
    }),
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    DataTablesModule,
    RouterModule,
  ],
  providers: [
    UserService,
    AuthenticationService,
    AuthorizationService,
    AuthenticationGuard,
    AuthorizationGuard,
    JwtHelperService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
