import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
	@Output() regsterUser: EventEmitter<IRegisterUserData> = new EventEmitter();

	public userRegistrationFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(8)]],
		passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
	});

	constructor(private fb: FormBuilder) {}

	public onUserRegister(): void {
		this.regsterUser.emit(this.userRegistrationFormGroup.value);
		this.userRegistrationFormGroup.reset();
	}
}
