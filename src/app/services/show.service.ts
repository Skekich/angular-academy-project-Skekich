import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShow } from '../interfaces/show.interface';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private rawShowsData: Array<IShow> = [
		{
			title: 'The Expanse',
			description:
				'A thriller set two hundred years in the future, The Expanse follows the case of a missing young woman who brings a hardened detective and a rogue ships captain together in a race across the solar system to expose the greatest conspiracy in human history.',
			average_rating: 4.6,
			image_url: '../assets/images/expanse.jpg',
			id: '1',
		},
		{
			title: 'Star Trek: The Next Generation',
			description:
				'Captain Jean-Luc Picard leads a new generation of Starfleet officers in the Enterprise NCC 1701-D spacecraft to seek out new planet and life forms in space.',
			average_rating: 4.7,
			image_url: '../assets/images/star_trek.jpg',
			id: '2',
		},
		{
			title: 'Battlestar Galactica',
			description:
				'A group of humans aboard a battleship, Battlestar Galactica, are forced to abandon their planet after being attacked by Cylons. They try to evade the Cylons while searching for their true home, Earth.',
			average_rating: 4.4,
			image_url: '../assets/images/bsg.jpg',
			id: '3',
		},
		{
			title: 'X Files',
			description:
				'Conspiracy theorist Fox Mulder and realist Dana Scully pull out all the stops as FBI special agents to investigate and get to the bottom of inexplicable paranormal cases.',
			average_rating: 3.9,
			image_url: '../assets/images/x_files.jpg',
			id: '4',
		},
		{
			title: 'The Clone wars',
			description:
				'As multiple star systems get involved in the Clone Wars, the Jedi Knights struggle to keep the peace and defeat the droid army of the Separatists. Meanwhile, an old threat slowly reveals its presence.',
			average_rating: 3.8,
			image_url: '../assets/images/clone_wars.jpg',
			id: '5',
		},
	];

	private get shows(): Array<Show> {
		return this.rawShowsData.map((showData: IShow) => {
			return new Show(showData);
		});
	}

	public getShows(): Observable<Array<Show>> {
		return of(this.shows);
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows) => shows.filter((show: Show) => show.averageRating > 4)));
	}

	public getShow(id: string): Observable<Show | null> {
		if (Math.random() < 0.1) {
			return this.getShows().pipe(
				map((shows) => shows.find((show: Show) => show.id === id) || null),
				throwError
			);
		} else {
			return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
		}
	}
}
