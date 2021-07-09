import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';

@NgModule({
	declarations: [AppComponent, ShowCardComponent, ShowListComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatButtonModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
