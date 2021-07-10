import { IShows } from '../models/IShows';

export class Show {
	constructor(elementData: IShows) {
		this.title = elementData.title;
		this.description = elementData.description;
		this.rating = elementData.rating;
		this.imgUrl = elementData.imgUrl;
	}

	title: string;
	description: string;
	rating: Array<number>;
	imgUrl: string;

	CalculateAverage() {
		return this.rating.reduce((total, rating) => total + rating, 0) / this.rating.length;
	}
}
