import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewComponent } from './components/review/review.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ReviewsComponent } from './pages/show-details-container/components/reviews/reviews.component';
import { ShowDetailComponent } from './pages/show-details-container/components/show-detail/show-detail.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { UserLoginComponent } from './pages/user-container/components/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-container/components/user-registration/user-registration.component';
import { UserFormLayoutComponent } from './components/user-form-layout/user-form-layout.component';
import { UserContainerComponent } from './pages/user-container/user-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [
		AllShowsContainerComponent,
		AppComponent,
		CommentComponent,
		LoadingSpinnerComponent,
		MainLayoutComponent,
		RatingComponent,
		ReviewComponent,
		ReviewListComponent,
		ReviewsComponent,
		ShowCardComponent,
		ShowDetailComponent,
		ShowDetailsContainerComponent,
		ShowListComponent,
		SidenavComponent,
		TopRatedShowsComponent,
		UserLoginComponent,
		UserRegistrationComponent,
		UserFormLayoutComponent,
		UserContainerComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
