import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPage } from './pages/login/login.page';

@NgModule( {
    declarations: [
        LoginPage
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginPage
    ]
} )
export class AuthModule {
}
