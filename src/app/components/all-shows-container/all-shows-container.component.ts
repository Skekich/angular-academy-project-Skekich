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
			description:
				'A thriller set two hundred years in the future, The Expanse follows the case of a missing young woman who brings a hardened detective and a rogue ships captain together in a race across the solar system to expose the greatest conspiracy in human history.',
			average_rating: [4, 5, 5, 4],
			image_url: '../assets/images/expanse.jpg',
		},
		{
			title: 'Star Trek: The Next Generation',
			description:
				'Captain Jean-Luc Picard leads a new generation of Starfleet officers in the Enterprise NCC 1701-D spacecraft to seek out new planet and life forms in space.',
			average_rating: [5, 5, 5, 4],
			image_url: '../assets/images/star_trek.jpg',
		},
		{
			title: 'Battlestar Galactica',
			description:
				'A group of humans aboard a battleship, Battlestar Galactica, are forced to abandon their planet after being attacked by Cylons. They try to evade the Cylons while searching for their true home, Earth.',
			average_rating: [4, 4, 5, 4],
			image_url: '../assets/images/bsg.jpg',
		},
		{
			title: 'X Files',
			description:
				'Conspiracy theorist Fox Mulder and realist Dana Scully pull out all the stops as FBI special agents to investigate and get to the bottom of inexplicable paranormal cases.',
			average_rating: [5, 4, 5, 4],
			image_url: '../assets/images/x_files.jpg',
		},
		{
			title: 'The Clone wars',
			description:
				'As multiple star systems get involved in the Clone Wars, the Jedi Knights struggle to keep the peace and defeat the droid army of the Separatists. Meanwhile, an old threat slowly reveals its presence.',
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
