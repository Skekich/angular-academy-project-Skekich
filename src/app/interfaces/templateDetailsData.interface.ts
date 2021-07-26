import { Review } from '../services/review.model';
import { Show } from '../services/show.model';

export interface ITemplateDetailsData {
	showDetails: Show | null;
	reviews: Array<Review> | null;
	showId: number | null;
}
