import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-write-review',
	templateUrl: './write-review.component.html',
	styleUrls: ['./write-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WriteReviewComponent {
	@Output() public reviewData: EventEmitter<any> = new EventEmitter();
	@Input() public showId: number | null;

	constructor(private fb: FormBuilder) {}

	public writeRatingFormGroup: FormGroup = this.fb.group({
		rating: ['', [Validators.required]],
		comment: ['', [Validators.required]],
	});

	onSubmit() {
		this.reviewData.emit({
			rating: this.writeRatingFormGroup.value.rating,
			comment: this.writeRatingFormGroup.value.comment,
			showId: this.showId,
		});
		this.writeRatingFormGroup.reset();
	}
}
