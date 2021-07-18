import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/services/review.model';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent implements OnInit {
	@Input() reviews: Array<Review> | null;
	@Input() isLoading: boolean;

	ngOnInit() {
		if (this.reviews!.length < 1) {
			this.reviews = null;
		}
	}
}
