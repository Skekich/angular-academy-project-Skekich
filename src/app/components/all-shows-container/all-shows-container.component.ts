import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IShows } from 'src/app/models/IShows';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent implements OnInit {
	rawShowsData: Array<IShows> = [
		{
			title: 'The Expanse',
			description: 'This is a show!',
			average_rating: [4, 5, 5, 4],
			image_url: '../assets/images/expanse.jpg',
		},
		{
			title: 'Star Trek',
			description: 'This is a show!',
			average_rating: [5, 5, 5, 4],
			image_url: '../assets/images/star_trek.jpg',
		},
		{
			title: 'Battlestar Galactica',
			description: 'This is a show!',
			average_rating: [4, 4, 5, 4],
			image_url: '../assets/images/bsg.jpg',
		},
		{
			title: 'X Files',
			description: 'This is a show!',
			average_rating: [5, 4, 5, 4],
			image_url: '../assets/images/x_files.jpg',
		},
		{
			title: 'The Clone wars',
			description: 'This is a show!',
			average_rating: [3, 4, 5, 4],
			image_url: '../assets/images/clone_wars.jpg',
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
