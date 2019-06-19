import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthPage } from './pages/auth-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { RequireNewPasswordFormComponent } from './components/require-new-password-form/require-new-password-form.component';

@NgModule( {
    declarations: [
        AuthPage,
        SignInFormComponent,
        RequireNewPasswordFormComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
    exports: [
        AuthPage
    ]
} )
export class AuthModule {
}
