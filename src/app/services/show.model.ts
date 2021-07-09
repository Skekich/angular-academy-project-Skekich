export class Show {
	constructor(elementData: any) {
		this.title = elementData.title;
		this.rating = elementData.rating;
		this.imgUrl = elementData.imgUrl;
	}

	title: string;
	rating: Array<number>;
	imgUrl: string;

	CalculateAverage() {
		return this.rating.reduce((total, rating) => total + rating, 0) / this.rating.length;
	}
}
