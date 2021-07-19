import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IReview } from '../interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	private rawReviewData: Array<IReview> = [
		{
			id: '1',
			showId: '1',
			rating: 5,
			comment:
				'Probably one of the best ever Sci-fi shows out there in my opinion. The true nature of humans and how far theyre willing to go to screw each other over are fully portrayed here, also the epic sci-fi scenes and excellent cgi just add the the immersive style and feel.',
		},
		{
			id: '2',
			showId: '1',
			rating: 2.3,
			comment:
				'I gave it 5 stars before Amazon took over. In season 1-3 I thought the actors played their roles very well. Now that I have watched 4 episodes in 4, it seems the writers/producer are too lazy to produce a meaningful show.',
		},
		{
			id: '3',
			showId: '2',
			rating: 5,
			comment:
				'Watching ST:TNG again, I have to say that the show is actually better than I remembered. While I have always enjoyed the TNG, I remembered the show being more of the stuffy, duller, and ponderous Trek show. That said, I found myself enjoying TNG due to the show being a bit more complex than TOS. Now, I still really enjoy TOS but TNG tends to got a bit further with its concepts and ideas as well as character development than TOS',
		},
		{
			id: '4',
			showId: '2',
			rating: 4.2,
			comment: 'I just watched it this morning. Already interested. Not the same without Kirk and Spock though.',
		},
		{
			id: '5',
			showId: '3',
			rating: 4.8,
			comment:
				'After rewatching the show after around a decade, I have come to think that this is possibly the best Sci Fi show ever made. With cleverly written scripts, you really feel for the characters with the twists and turns instore for each one. I was a massive fan of the original and was initially disappointed that the new Cylons had taken human form but I have since changed my mind as this show wouldnt have worked with their previous Robot like form.',
		},
		{
			id: '6',
			showId: '4',
			rating: 3.9,
			comment:
				'Great Plot and Casting with lots of struggle and great characters. Disappointed there is no conclusion for a lot of the mythology besides the syndicate. Most of the saga is still floating around in the universe. Mythology really clinched this storyline for me, the monsters of the week are cute and remind me of Abbot and Costello but they dont really fit in with the rest of the story.',
		},
		{
			id: '7',
			showId: '4',
			rating: 3.8,
			comment:
				'Nearly 30 years later and I still cant stop watching this show. I miss it, but Im glad I have my DVDs. Shows like this one are so rare that they are like comets seen only once in a lifetime. Everything lined up with the universe, great concept, amazing chemistry of the leads, great writers, and a brand new network willing to let it grow. The X-files became its own X-file that grew beyond its confines, and we are so much better for it. ',
		},
	];

	private get reviews(): Array<Review> {
		return this.rawReviewData.map((showRating: IReview) => {
			return new Review(showRating);
		});
	}

	private getAllReviews(): Observable<Array<Review>> {
		return of(this.reviews);
	}

	public getSelectedShowReviews(id: string): Observable<Array<Review> | null> {
		if (Math.random() < 0.1) {
			return this.getAllReviews().pipe(
				map((reviews) => reviews.filter((review: Review) => review.showId == id) || null),
				throwError
			);
		} else {
			return this.getAllReviews().pipe(
				map((reviews) => reviews.filter((review: Review) => review.showId == id) || null)
			);
		}
	}
}
