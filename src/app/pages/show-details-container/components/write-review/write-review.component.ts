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

	constructor(private fb: FormBuilder) {}

	public writeRatingFormGroup: FormGroup = this.fb.group({
		rating: ['', [Validators.required]],
		comment: ['', [Validators.required]],
	});

	public onSubmit() {
		this.reviewData.emit({
			rating: this.writeRatingFormGroup.value.rating,
			comment: this.writeRatingFormGroup.value.comment,
		});
		this.writeRatingFormGroup.reset();
	}
}
