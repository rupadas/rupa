import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
//import { BaseService } from './app/services';

if (environment.production) {
  enableProdMode();
}

if (localStorage.getItem('language') === null) {
	localStorage.setItem('language', 'en');
}

const locale = localStorage.getItem('language');
declare const require;
const translations = require('raw-loader!./locale/messages.'+locale+'.xlf');

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
});
