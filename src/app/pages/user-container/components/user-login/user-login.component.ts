import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
	public userLoginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});

	constructor(private fb: FormBuilder) {}

	public onUserLogin(): void {
		console.log(this.userLoginFormGroup.value);
		this.userLoginFormGroup.reset();
	}
}
