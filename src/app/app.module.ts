import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

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
	],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatIconModule, MatSidenavModule, MatButtonModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
