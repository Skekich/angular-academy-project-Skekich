import { IUser } from './user.interface';

export interface IReview {
	id: string;
	showId: string;
	rating: number;
	comment: string;
	user: IUser;
}
