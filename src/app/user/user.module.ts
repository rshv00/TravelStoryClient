import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {IntroComponent} from './intro/intro.component';
import {LikesComponent} from './likes/likes.component';
import {UserRoutingModule} from './user-routing.module';
import {UserPageComponent} from './user-page/user-page.component';
import {FeedComponent} from './feed/feed.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerPostComponent} from './user-page/container-post/container-post.component';
import {CommentsComponent} from './comments/comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {UserInfoSideComponent} from './user-info-side/user-info-side.component';
import {
  FollowersDialogComponent,
  FollowingDialogComponent,
  UserFollowsSideComponent
} from './user-follows-side/user-follows-side.component';
import {UserGallerySideComponent} from './user-gallery-side/user-gallery-side.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {UserComponent} from './user.component';
import {UserPlacesComponent} from './user-places/user-places.component';
import {ScrollableDirective} from './scrollable.directive';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TranslateModule} from '@ngx-translate/core';
import {DialogEditTravelStoryComponent} from './user-page/dialog-edit-travel-story/dialog-edit-travel-story.component';
import {DialogChangeBackgroundImageComponent} from './intro/dialog-change-background-image/dialog-change-background-image.component';
import {NgxLoadingModule} from 'ngx-loading';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {GalleryComponent, MediaDialogComponent, ConfirmationDialogComponent} from './gallery/gallery.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent, SearchDialogComponent} from '../search/search.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    TranslateModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
    NgxLoadingModule.forRoot({}),
  ],
  entryComponents: [
    FollowersDialogComponent,
    FollowingDialogComponent,
    MediaDialogComponent,
    ConfirmationDialogComponent,
    SearchDialogComponent
],
  declarations: [
    UserComponent,
    IntroComponent,
    UserPageComponent,
    FeedComponent,
    FooterComponent,
    HeaderComponent,
    ContainerPostComponent,
    LikesComponent,
    CommentsComponent,
    UserInfoSideComponent,
    UserFollowsSideComponent,
    UserGallerySideComponent,
    MediaDialogComponent,
    UserPlacesComponent,
    FollowersDialogComponent,
    FollowingDialogComponent,
    ScrollableDirective,
    SettingsPageComponent,
    DialogEditTravelStoryComponent,
    DialogChangeBackgroundImageComponent,
    GalleryComponent,
    ConfirmationDialogComponent,
    SearchDialogComponent,
    SearchComponent
  ]
})
export class UserModule {
}
