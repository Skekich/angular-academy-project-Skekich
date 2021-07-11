import { IShow } from '../models/IShow';

export class Show {
	constructor(elementData: IShow) {
		this.title = elementData.title;
		this.description = elementData.description;
		this.averageRating = elementData.average_rating;
		this.imageUrl = elementData.image_url;
	}

	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;

	ShowAverage() {
		console.log(this.averageRating + ' %');
	}
}
