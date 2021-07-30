import { IReview } from '../interfaces/review.interface';
import { IUser } from '../interfaces/user.interface';

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
	public user: IUser;
}
