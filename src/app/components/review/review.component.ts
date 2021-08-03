import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { ReviewService } from 'src/app/services/review.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
	@Input() rating: number;
	@Input() comment: string;
	@Input() email: string;
	@Input() imageUrl: string;
	@Input() reviewId: string;
	@Input() userId: string;

	public layout$: Observable<ILayout>;

	constructor(
		breakpointsObserver: BreakpointObserver,
		private userSerevice: UserService,
		private reviewService: ReviewService,
		private sharedService: SharedService
	) {
		this.layout$ = breakpointsObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	public currentUserId$: Observable<string> = this.userSerevice.getUser().pipe(
		map((userId) => {
			return userId.id;
		})
	);

	public onDeleteReview(event: Event): void {
		this.reviewService.deleteReview(this.reviewId).subscribe();
		this.sharedService.nextMessage(true);
	}
}
