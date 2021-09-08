import { IReview } from '../interfaces/review.interface';
import { User } from './user.model';

export class Review {
	constructor(reviewData: IReview) {
		this.id = reviewData.id;
		this.showId = reviewData.showId;
		this.rating = reviewData.rating;
		this.comment = reviewData.comment;
		this.user = reviewData.user;
	}

	public id: string;
	public showId: string;
	public rating: number;
	public comment: string;
	public user: User;
}
