import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './core/components/header-nav/header-nav.component';
import { APP_CONFIG } from './core/tokens/app-config.token';

@NgModule( {
    declarations: [
        AppComponent,
        HeaderNavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        { provide: APP_CONFIG, useValue: environment.appConfig }
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
