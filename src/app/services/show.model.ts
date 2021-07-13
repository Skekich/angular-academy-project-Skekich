import { IShow } from '../interfaces/show.interface';

export class Show {
	constructor(elementData: IShow) {
		this.title = elementData.title;
		this.description = elementData.description;
		this.averageRating = elementData.average_rating;
		this.imageUrl = elementData.image_url;
		this.id = elementData.id;
	}

	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
	id: string;

	ShowAverage() {
		console.log(this.averageRating + ' %');
	}
}
