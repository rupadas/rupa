import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor } from '../helpers';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms' ;
import { NewnumberRoutingModule } from './newnumber-routing.module';
import { NewNumberComponent } from './new-number/new-number.component';
import { GeoComponent } from './geo/geo.component';
import { LocationIndependentComponent } from './location-independent/location-independent.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { UkAnyComponent } from './uk-any/uk-any.component';
import { UkPublicComponent } from './uk-public/uk-public.component';
import { NumberActivationComponent } from './number-activation/number-activation.component';

@NgModule({
  declarations: [
  	NewNumberComponent, 
  	GeoComponent, 
  	LocationIndependentComponent,
  	Step2Component,
  	Step3Component,
  	UkAnyComponent,
  	UkPublicComponent,
    NumberActivationComponent
  ],

  imports: [
    SharedModule,
    NewnumberRoutingModule
    // ReactiveFormsModule, FormsModule
  ],

  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class NewNumberModule { }
