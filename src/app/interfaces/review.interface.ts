import { User } from '../services/user.model';

export interface IReview {
	id: string;
	showId: string;
	rating: number;
	comment: string;
	user: User;
}
