import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
	@Input() rating: number;
}
