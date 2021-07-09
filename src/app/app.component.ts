import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	shows = [
		{
			title: 'The Expanse',
			rating: 5,
			imgUrl: '../assets/images/expanse.jpg',
		},
		{
			title: 'Star Trek',
			rating: 5,
			imgUrl: '../assets/images/star_trek.jpg',
		},
		{
			title: 'Battlestar Galactica',
			rating: 5,
			imgUrl: '../assets/images/bsg.jpg',
		},
		{
			title: 'X Files',
			rating: 5,
			imgUrl: '../assets/images/x_files.jpg',
		},
		{
			title: 'The Clone wars',
			rating: 5,
			imgUrl: '../assets/images/clone_wars.jpg',
		},
	];
}
