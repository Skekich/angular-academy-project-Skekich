import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-write-review',
	templateUrl: './write-review.component.html',
	styleUrls: ['./write-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WriteReviewComponent {
	@Output() public reviewData: EventEmitter<any> = new EventEmitter();
	public layout$: Observable<ILayout>;

	constructor(private fb: FormBuilder, breakpointsObserver: BreakpointObserver, private snackBar: MatSnackBar) {
		this.layout$ = breakpointsObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

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
