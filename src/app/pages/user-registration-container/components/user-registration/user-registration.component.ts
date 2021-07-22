import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData.interface';
import { passwordMatchValidator } from 'src/app/validators/passwordMatch.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const invalidControl = !!(control && control.invalid && control.parent!.dirty);
		const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

		return invalidControl || invalidParent;
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

	matcher = new ErrorStateMatcher();

	constructor(private fb: FormBuilder) {}

	public userRegistrationFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
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
