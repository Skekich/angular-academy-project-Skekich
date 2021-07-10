import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { AllShowsContainerComponent } from './components/all-shows-container/all-shows-container.component';

@NgModule({
	declarations: [AppComponent, ShowCardComponent, ShowListComponent, RatingComponent, AllShowsContainerComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatIconModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
