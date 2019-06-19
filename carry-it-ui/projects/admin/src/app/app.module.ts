import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { CrudFormActionsModule, DropdownSearchModule, LoadingOverlayModule, MasterDetailModule } from 'common-ui';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ADMIN_COMPONENTS } from './components';
import { GraphqlApiModule } from './graphql-api/graphql-api.module';
import { ADMIN_PAGES } from './pages';
import { APP_CONFIG } from './tokens/app-config.token';

@NgModule( {
    declarations: [
        AppComponent,
        ADMIN_COMPONENTS,
        ADMIN_PAGES
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        AmplifyAngularModule,

        AuthModule,
        CrudFormActionsModule,
        DropdownSearchModule,
        GraphqlApiModule,
        LoadingOverlayModule,
        MasterDetailModule,
        AppRoutingModule
    ],
    providers: [
        { provide: APP_CONFIG, useValue: environment.appConfig },
        AmplifyService
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
