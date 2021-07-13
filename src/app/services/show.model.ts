import { IShow } from '../interfaces/show.interface';

export class Show {
	constructor(elementData: IShow) {
		this.title = elementData.title;
		this.description = elementData.description || 'Default description';
		this.averageRating = elementData.average_rating;
		this.imageUrl = elementData.image_url;
		this.id = elementData.id;
	}

	public title: string;
	public description: string;
	public averageRating: number;
	public imageUrl: string;
	public id: string;

	public ShowAverage() {
		console.log(this.averageRating + ' %');
	}
}
