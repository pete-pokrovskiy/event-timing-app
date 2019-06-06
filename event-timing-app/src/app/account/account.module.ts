import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    RouterModule.forChild([
{
  path: 'account/signin', component: SigninComponent
}

    ]),
    RouterModule, FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  exports: [ SigninComponent, SignupComponent]
})
export class AccountModule { }
