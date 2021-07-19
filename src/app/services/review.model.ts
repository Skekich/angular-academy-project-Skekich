import { IReview } from '../interfaces/review.interface';

export class Review {
	constructor(reviewData: IReview) {
		this.id = reviewData.id;
		this.showId = reviewData.showId;
		this.rating = reviewData.rating;
		this.comment = reviewData.comment;
	}

	public id: string;
	public showId: string;
	public rating: number;
	public comment: string;
}
