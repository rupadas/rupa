import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards';
import { NewNumberComponent } from './new-number/new-number.component';
import { GeoComponent } from './geo/geo.component';
import { LocationIndependentComponent } from './location-independent/location-independent.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { UkAnyComponent } from './uk-any/uk-any.component';
import { UkPublicComponent } from './uk-public/uk-public.component';
import { NumberActivationComponent } from './number-activation/number-activation.component';

const routes: Routes = [
	{
		path: '',
		component: NewNumberComponent,
		children: [
      {
        path: 'geo',
        component: GeoComponent,
      },
      {
        path: 'locationindependent',
        component: LocationIndependentComponent,
      },
      {
        path: 'ukany',
        component: UkAnyComponent, 
      },
      {
        path: 'ukpublic',
        component: UkPublicComponent, 
      },
      {
        path: 'step2',
        component: Step2Component,
      },
      {
        path: 'step3',
        component: Step3Component,
      },
      {
        path: 'activation',
        component: NumberActivationComponent,
      },
    ]
	},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild( routes)]
})
export class NewnumberRoutingModule { }
