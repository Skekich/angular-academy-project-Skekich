import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, merge, Observable, Subject, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IPostReview } from 'src/app/interfaces/postReview.interface';
import { ITemplateDetailsData } from 'src/app/interfaces/templateDetailsData.interface';
import { ReviewService } from 'src/app/services/review.service';
import { SharedService } from 'src/app/services/shared.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent {
	constructor(
		private route: ActivatedRoute,
		private showService: ShowService,
		private reviewService: ReviewService,
		private sharedService: SharedService
	) {
		this.sharedService.sharedMessage.subscribe((msg) => {
			console.log(msg);
			this.currentReview$.next(msg);
		});
	}

	public currentReview$: Subject<boolean> = new Subject<boolean>();
	public currentShowId: string;

	public showDetailsData$: Observable<ITemplateDetailsData> = merge(this.route.paramMap, this.currentReview$).pipe(
		switchMap(() => {
			const id: string | null = this.route.snapshot.paramMap.get('id');

			if (!id) {
				return throwError('error');
			}

			return combineLatest([this.showService.getShow(id), this.reviewService.getSelectedShowReviews(id)]).pipe(
				map(([showDetails, reviews]) => {
					return {
						showDetails,
						reviews,
					};
				})
			);
		}),
		tap((data) => {
			if (data.showDetails) {
				this.currentShowId = data.showDetails.id;
			}
		})
	);

	public onReviewSubmit(data: IPostReview): void {
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
