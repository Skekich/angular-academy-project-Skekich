import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UserFormLayoutComponent } from './components/user-form-layout/user-form-layout.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { UserLoginComponent } from './pages/user-container/components/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-container/components/user-registration/user-registration.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AllShowsContainerComponent,
			},
			{
				path: 'top-rated',
				component: TopRatedShowsComponent,
			},
			{
				path: 'show/:id',
				component: ShowDetailsContainerComponent,
			},
		],
	},
	{
		path: '',
		component: UserFormLayoutComponent,
		children: [
			{
				path: 'login',
				component: UserLoginComponent,
			},
			{
				path: 'registration',
				component: UserRegistrationComponent,
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
