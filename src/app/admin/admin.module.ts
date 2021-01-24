import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardCrmModule} from './dashboard-crm/dashboard-crm.module';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import {AdminFooterComponent} from './admin-footer/admin-footer.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {AdminSearchComponent} from './admin-header/admin-search/admin-search.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from '../search/search.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    DashboardCrmModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule
  ],
  declarations: [AdminComponent, AdminFooterComponent, AdminHeaderComponent, AdminSearchComponent, ContactComponent]
})
export class AdminModule {
}
