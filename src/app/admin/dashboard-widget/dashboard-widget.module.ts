import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashcardComponent} from './dashcard/dashcard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LineGraphComponent} from './line-graph/line-graph.component';
import {BarGraphComponent} from './bar-graph/bar-graph.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {SharePriceComponent} from './share-price/share-price.component';
import {TmNgOdometerModule} from 'tm-ng-odometer';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    TmNgOdometerModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashcardComponent,
    LineGraphComponent,
    BarGraphComponent,
    SharePriceComponent,
  ],
  exports: [
    DashcardComponent,
    LineGraphComponent,
    BarGraphComponent,
    SharePriceComponent,
  ]
})
export class DashboardWidgetModule {
}
