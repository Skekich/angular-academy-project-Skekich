import { Component, OnInit } from '@angular/core';
import { Show } from './services/show.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	rawShowsData: Array<any> = [
		{
			title: 'The Expanse',
			rating: [4, 5, 5, 4],
			imgUrl: '../assets/images/expanse.jpg',
		},
		{
			title: 'Star Trek',
			rating: [5, 5, 5, 4],
			imgUrl: '../assets/images/star_trek.jpg',
		},
		{
			title: 'Battlestar Galactica',
			rating: [4, 4, 5, 4],
			imgUrl: '../assets/images/bsg.jpg',
		},
		{
			title: 'X Files',
			rating: [5, 4, 5, 4],
			imgUrl: '../assets/images/x_files.jpg',
		},
		{
			title: 'The Clone wars',
			rating: [3, 4, 5, 4],
			imgUrl: '../assets/images/clone_wars.jpg',
		},
	];

	shows: Array<Show>;

	ngOnInit() {
		this.shows = this.rawShowsData.map((element) => {
			return new Show(element);
		});

		this.shows.forEach((element) => {
			console.log(element.CalculateAverage());
		});
	}
}
