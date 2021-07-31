import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

interface IStar {
	id: number;
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

	private starSelected: number = 0;
	private tempStarSelected: number = 0;

	constructor() {
		for (let i = 1; i <= this.starCount; i++) {
			this.stars.push({
				id: i,
				class: 'star',
			});
		}
	}

	public selectStar(value: number): void {
		this.starSelected = value;
		console.log(value);
		this.currentRating.emit(value);
	}

	public onMouseEnter(value: number): void {
		this.tempStarSelected = value;
	}

	public onMouseLeave(): void {
		this.tempStarSelected = this.starSelected;
	}

	public showStars(value: number): string {
		if (value <= this.tempStarSelected) {
			return 'star';
		} else {
			return 'star_border';
		}
	}
}
