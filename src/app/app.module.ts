import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { AllShowsContainerComponent } from './components/all-shows-container/all-shows-container.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
	declarations: [
		AppComponent,
		ShowCardComponent,
		ShowListComponent,
		RatingComponent,
		AllShowsContainerComponent,
		SidenavComponent,
		MainLayoutComponent,
	],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatIconModule, MatSidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
