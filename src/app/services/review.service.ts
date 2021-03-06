import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPostReview } from '../interfaces/postReview.interface';
import { IReview } from '../interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor(private http: HttpClient) {}

	public addReview(review: IPostReview): Observable<HttpResponse<IPostReview>> {
		return this.http.post<IPostReview>(
			'https://tv-shows.infinum.academy/reviews',
			{
				rating: review.rating,
				comment: review.comment,
				show_id: review.showId,
			},
			{ observe: 'response' }
		);
	}

	public getSelectedShowReviews(id: string | null): Observable<Array<Review> | null> {
		return this.http.get<{ reviews: Array<IReview> }>('https://tv-shows.infinum.academy/shows/' + id + '/reviews').pipe(
			map((response) => {
				return response.reviews.map((data: IReview) => new Review(data));
			})
		);
	}

	public deleteReview(id: string | null): Observable<HttpResponse<Review>> {
		return this.http.delete<Review>('https://tv-shows.infinum.academy/reviews/' + id, {
			observe: 'response',
		});
	}
}
