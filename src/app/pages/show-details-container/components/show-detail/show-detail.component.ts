import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailComponent {
	@Input() show: Show | null;
	@Input() reviews: Array<Review> | null;
}
