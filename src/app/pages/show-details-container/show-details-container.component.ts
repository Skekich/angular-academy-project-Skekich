import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest, merge, Observable, Subject, throwError } from 'rxjs';
import { catchError, delay, map, retry, switchMap } from 'rxjs/operators';
import { IPostReview } from 'src/app/interfaces/postReview.interface';
import { ITemplateDetailsData } from 'src/app/interfaces/templateDetailsData.interface';
import { ReviewService } from 'src/app/services/review.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent {
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) {}

	public currentReview$: Subject<boolean> = new Subject<boolean>();
	public currentShowId: number;

	public showDetailsData$: Observable<ITemplateDetailsData> = this.route.paramMap.pipe(
		switchMap((data: ParamMap) => {
			return merge(this.route.paramMap, this.currentReview$).pipe(
				switchMap(() => {
					const id: string | null = data.get('id');
					if (!id) {
						return throwError('Error');
					}
					this.currentShowId = Number(id);
					return combineLatest([this.showService.getShow(id), this.reviewService.getSelectedShowReviews(id)]).pipe(
						map(([showDetails, reviews]) => {
							return {
								showDetails,
								reviews,
							};
						})
					);
				})
			);
		})
	);

	onReviewSubmit(data: IPostReview): void {
		this.reviewService
			.addReview({
				rating: data.rating,
				comment: data.comment,
				showId: this.currentShowId,
			})
			.subscribe(() => {
				this.currentReview$.next(true);
			});
	}
}
