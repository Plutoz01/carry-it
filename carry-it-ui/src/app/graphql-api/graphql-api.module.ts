import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppConfig } from '../core/models/app-config.interface';
import { APP_CONFIG } from '../core/tokens/app-config.token';
import { queries } from './queries';

export function createApollo( appConfig: AppConfig, httpLink: HttpLink ) {
    return {
        link: httpLink.create( { uri: appConfig.graphqlUrl } ),
        cache: new InMemoryCache(), // TODO: disable cache or config some rational cache lifetime
    };
}

@NgModule( {
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        ApolloModule,
        HttpLinkModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [ APP_CONFIG, HttpLink ],
        },
        ...queries
    ]
} )
export class GraphqlApiModule {
}
