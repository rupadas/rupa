import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './helpers';
import { AppComponent } from './app.component';
import { MyNumberComponent } from './my-number/my-number.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarLayoutComponent } from './layout/sidebar-layout/sidebar-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HelpComponent } from './help/help.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { PortinComponent } from './portin/portin.component';
import { SidebarModule } from 'ng-sidebar';
import { PortoutComponent } from './portout/portout.component';
import { BulkrequestComponent } from './bulkrequest/bulkrequest.component';
import { DownloadcdrComponent } from './downloadcdr/downloadcdr.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

import { TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarLayoutComponent,
    WelcomeComponent,
    HelpComponent,
    ContactusComponent,
    FaqComponent,
    PortinComponent,
    PortoutComponent,
    BulkrequestComponent,
    DownloadcdrComponent,
    MyaccountComponent,
    MyNumberComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports: [
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    I18n,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
