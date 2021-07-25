import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, delay, map, retry, switchMap } from 'rxjs/operators';
import { IAddReview } from 'src/app/interfaces/addReview.interface';
import { ICurrentReview } from 'src/app/interfaces/currentReview.interface';
import { ITemplateDetailsData } from 'src/app/interfaces/templateDetailsData.interface';
import { Review } from 'src/app/services/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent {
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) {}
	private showID: string | null;

	public reviewSubject$: Subject<ICurrentReview> = new Subject<ICurrentReview>();

	private show$: Observable<Show | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');
			this.showID = id;
			if (id) {
				return this.showService.getShow(id);
			}
			return of(null);
		})
	);
	private review$: Observable<Array<Review> | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');
			if (id) {
				return this.reviewService.getSelectedShowReviews(id);
			}
			return of(null);
		})
	);

	public showDetailsData$: Observable<ITemplateDetailsData> = combineLatest([this.show$, this.review$]).pipe(
		map(([showDetails, reviews]) => {
			return {
				showDetails,
				reviews,
			};
		}),
		delay(1000 + Math.random() * 1000),
		retry(1),
		catchError(() => {
			return throwError('There was an error while getting data');
		})
	);

	onReviewSubmit(data: IAddReview): void {
		this.reviewService
			.addReview({ rating: data.rating, comment: data.comment, showID: Number(this.showID) })
			.subscribe(() => {
				this.reviewSubject$.next({ rating: data.rating, comment: data.comment });
			});
	}
}
