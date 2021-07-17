import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
	@Input() reviews: Array<Review> | null;
}
