import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData.interface';
import { passwordMatchValidator } from 'src/app/validators/passwordMatch.validator';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
	@Output() registerUser: EventEmitter<IRegisterUserData> = new EventEmitter();

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
