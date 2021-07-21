import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginUserData } from 'src/app/interfaces/loginUserData.interface';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
	@Output() userLogin: EventEmitter<ILoginUserData> = new EventEmitter();

	constructor(private fb: FormBuilder) {}

	public userLoginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});

	public onLogin(): void {
		this.userLogin.emit(this.userLoginFormGroup.value);
		this.userLoginFormGroup.reset();
	}
}
