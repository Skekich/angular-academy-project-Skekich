import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData.interface';
import { passwordMatchValidator } from 'src/app/validators/passwordMatch.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const invalidCtrl: boolean = !!(control && control.invalid && control.parent!.dirty);
		const invalidParent: boolean = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

		return invalidCtrl || invalidParent;
	}
}

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
	@Output() registerUser: EventEmitter<IRegisterUserData> = new EventEmitter();
	public layout$: Observable<ILayout>;

	matcher = new MyErrorStateMatcher();

	constructor(private fb: FormBuilder, breakpointsObserver: BreakpointObserver) {
		this.layout$ = breakpointsObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	public userRegistrationFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			passwordConfirm: [''],
		},
		{
			validator: passwordMatchValidator,
		}
	);

	public onUserRegister(): void {
		this.registerUser.emit(this.userRegistrationFormGroup.value);
		this.userRegistrationFormGroup.reset();
	}
}
