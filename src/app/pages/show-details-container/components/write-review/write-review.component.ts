import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddReview } from 'src/app/interfaces/addReview.interface';

@Component({
	selector: 'app-write-review',
	templateUrl: './write-review.component.html',
	styleUrls: ['./write-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WriteReviewComponent {
	@Output() public reviewData: EventEmitter<IAddReview> = new EventEmitter();
	constructor(private fb: FormBuilder) {}

	public writeRatingFormGroup: FormGroup = this.fb.group({
		rating: ['', [Validators.required]],
		comment: ['', [Validators.required]],
	});

	onSubmit() {
		this.reviewData.emit(this.writeRatingFormGroup.value);
		this.writeRatingFormGroup.reset();
	}
}
