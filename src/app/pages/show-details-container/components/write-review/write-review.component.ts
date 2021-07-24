import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-write-review',
	templateUrl: './write-review.component.html',
	styleUrls: ['./write-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WriteReviewComponent implements OnInit {
	public rating: number = 0;
	constructor() {}

	ngOnInit(): void {}
}
