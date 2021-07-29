import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

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
	private clicked: boolean = false;

	constructor() {
		for (let i = 0; i < this.starCount; i++) {
			this.stars.push({
				id: i,
				icon: 'star_border',
				class: 'star',
			});
		}
	}

	public selectStar(value: number): void {
		this.stars.forEach((star) => {
			if (star.id <= value) {
				star.icon = 'star';
			} else {
				star.icon = 'star_border';
			}
			this.clicked = true;
			return star;
		});

		this.currentRating.emit(value + 1);
	}

	public showStars(value: number): void {
		this.stars.forEach((star) => {
			if (!this.clicked) {
				if (star.id <= value) {
					star.icon = 'star';
				} else {
					star.icon = 'star_border';
				}
			}
		});
	}
}
