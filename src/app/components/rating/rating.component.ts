import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit {
	@Input() rating: Array<number>;
	@Input() currentRating: number;

	ngOnInit() {
		this.currentRating = this.rating.reduce((total, rating) => total + rating, 0) / this.rating.length;
	}
}
