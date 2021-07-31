import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-stars',
	templateUrl: './stars.component.html',
	styleUrls: ['./stars.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsComponent {
	@Input() rating: number;

	public createArray(value: number): Array<number> {
		return new Array(value);
	}
}
