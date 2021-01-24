import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MapsRouterModule} from './maps.router';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapComponent} from './google-map/google-map.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    }),
    MapsRouterModule
  ],
  declarations: [
    GoogleMapComponent],

  exports: []
})
export class MapsModule {
}
