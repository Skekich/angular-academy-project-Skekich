import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardComponent {
	@Input() title: string;
	@Input() description: string;
	@Input() rating: Array<number>;
	@Input() imgUrl: string;

	showTitle(event?: MouseEvent) {
		console.log(this.title);
	}
}
