import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
	constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {}

	public userRegistrationFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(8)]],
		passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
	});

	private onNewUserRegister(registerData: IRegisterUserData): void {
		this.authService
			.onUserRegister(registerData)
			.pipe(
				catchError((error) => {
					return throwError(error.status);
				})
			)
			.subscribe((registerData) => {
				console.log(registerData);
				this.route.navigate(['']);
			});
	}

	public onUserRegister(): void {
		this.onNewUserRegister(this.userRegistrationFormGroup.value);
		this.userRegistrationFormGroup.reset();
	}
}
