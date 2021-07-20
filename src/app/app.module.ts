import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowDetailComponent } from './pages/show-details-container/components/show-detail/show-detail.component';
import { ReviewsComponent } from './pages/show-details-container/components/reviews/reviews.component';
import { CommentComponent } from './components/comment/comment.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';

@NgModule({
	declarations: [
		AppComponent,
		ShowCardComponent,
		ShowListComponent,
		RatingComponent,
		AllShowsContainerComponent,
		SidenavComponent,
		MainLayoutComponent,
		TopRatedShowsComponent,
		ShowDetailsContainerComponent,
		ShowDetailComponent,
		ReviewsComponent,
		CommentComponent,
		LoadingSpinnerComponent,
  ReviewComponent,
  ReviewListComponent,
  UserRegistrationComponent,
  UserLoginComponent,
  UserManagerComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatIconModule,
		MatSidenavModule,
		MatButtonModule,
		AppRoutingModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
