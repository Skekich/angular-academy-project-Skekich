import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

interface IStar {
	id: number;
	icon: string;
	class: string;
}

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	@Output() currentRating: EventEmitter<any> = new EventEmitter();
	private starCount: number = 5;
	public stars: Array<IStar> = new Array<IStar>();

	constructor() {
		for (let i = 0; i < this.starCount; i++) {
			this.stars.push({
				id: i,
				icon: 'star',
				class: 'star-gray star-hover star',
			});
		}
	}

	selectStar(value: number): void {
		this.stars.filter((star) => {
			if (star.id <= value) {
				star.class = 'star-gold star';
			} else {
				star.class = 'star-gray star';
			}

			return star;
		});

		this.currentRating.emit(value + 1);
	}
}
