import { IShows } from '../models/IShows';

export class Show {
	constructor(elementData: IShows) {
		this.title = elementData.title;
		this.description = elementData.description;
		this.average_rating = elementData.average_rating;
		this.image_url = elementData.image_url;
	}

	title: string;
	description: string;
	average_rating: Array<number>;
	image_url: string;

	CalculateAverage() {
		return this.average_rating.reduce((total, rating) => total + rating, 0) / this.average_rating.length + ' %';
	}
}
