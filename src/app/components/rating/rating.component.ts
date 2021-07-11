import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit {
	@Input() rating: number;

	ngOnInit() {}
}
