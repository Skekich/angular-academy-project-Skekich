import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { UserLoginComponent } from './pages/user-login-container/components/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration-container/components/user-registration/user-registration.component';
import { UserFormLayoutComponent } from './components/user-form-layout/user-form-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserLoginContainerComponent } from './pages/user-login-container/user-login-container.component';
import { UserRegistrationContainerComponent } from './pages/user-registration-container/user-registration-container.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { WriteReviewComponent } from './pages/show-details-container/components/write-review/write-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { LogoComponent } from './components/logo/logo.component';
import { StarsComponent } from './components/stars/stars.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FileUploadComponent } from './pages/user-profile/components/file-upload/file-upload.component';
import { DragDirective } from './directives/dragDrop.directive';
import { ShowUserComponent } from './pages/user-profile/components/show-user/show-user.component';

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
		UserFormLayoutComponent,
		UserLoginComponent,
		UserLoginContainerComponent,
		UserRegistrationComponent,
		UserRegistrationContainerComponent,
		WriteReviewComponent,
		StarRatingComponent,
		LogoComponent,
		StarsComponent,
		UserProfileComponent,
		FileUploadComponent,
		DragDirective,
  ShowUserComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatSnackBarModule,
		NgbModule,
		ReactiveFormsModule,
		LayoutModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
