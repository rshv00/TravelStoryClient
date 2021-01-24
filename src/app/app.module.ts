import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './service/interceptor.service';
import {MyAuthService} from './service/my-auth.service';
import {DialogChangeProfilePicComponent} from './user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component';
import {MessengerModule} from './messenger/messenger.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DialogAddTravelStoryComponent} from './user/user-page/dialog-add-travel-story/dialog-add-travel-story.component';
import {DialogEditTravelStoryComponent} from './user/user-page/dialog-edit-travel-story/dialog-edit-travel-story.component';
import {DialogChangeBackgroundImageComponent} from './user/intro/dialog-change-background-image/dialog-change-background-image.component';

import {SecurityModule} from './security/security.module';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';
import {AngularFireModule} from '@angular/fire';
import {FileSizePipe} from './user/intro/dialog-change-profile-pic/file-size.pipe';
import {DropZoneDirective} from './user/drop-zone.directive';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {AdminModule} from './admin/admin.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FeatureTableComponent} from './admin/table/feature-table/feature-table.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DialogChangeProfilePicComponent,
    DialogAddTravelStoryComponent,
    FileSizePipe,
    DropZoneDirective,
    FeatureTableComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule,
    MatTableModule,
    MatGridListModule,
    AdminRoutingModule,
    AdminModule,
    MatFormFieldModule,
    UserModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    AppRoutingModule,
    SecurityModule,
    MessengerModule,
    MatNativeDateModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }, )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    MyAuthService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogChangeProfilePicComponent,
    DialogChangeBackgroundImageComponent,
    DialogAddTravelStoryComponent,
    DialogEditTravelStoryComponent,
  ],
})
export class AppModule {
}
