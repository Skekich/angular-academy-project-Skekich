import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UserFormLayoutComponent } from './components/user-form-layout/user-form-layout.component';
import { AppGuard } from './guards/app.guard';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { UserLoginContainerComponent } from './pages/user-login-container/user-login-container.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserRegistrationContainerComponent } from './pages/user-registration-container/user-registration-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AllShowsContainerComponent,
				canActivate: [AppGuard],
			},
			{
				path: 'top-rated',
				component: TopRatedShowsComponent,
				canActivate: [AppGuard],
			},
			{
				path: 'show/:id',
				component: ShowDetailsContainerComponent,
				canActivate: [AppGuard],
			},
			{
				path: 'my-profile',
				component: UserProfileComponent,
				canActivate: [AppGuard],
			},
		],
		canActivate: [AppGuard],
	},
	{
		path: '',
		component: UserFormLayoutComponent,
		children: [
			{
				path: 'login',
				component: UserLoginContainerComponent,
			},
			{
				path: 'registration',
				component: UserRegistrationContainerComponent,
			},
		],
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
