import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILoginUserData } from 'src/app/interfaces/loginUserData.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
	constructor(private fb: FormBuilder, private authService: AuthService) {}

	public userLoginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});

	private onUserLogin(loginData: ILoginUserData): void {
		this.authService
			.onUserLogin(loginData)
			.pipe(
				catchError((error) => {
					return throwError(error.status);
				})
			)
			.subscribe((loginData) => {
				console.log(loginData);
			});
	}

	public onLogin(): void {
		this.onUserLogin(this.userLoginFormGroup.value);
		this.userLoginFormGroup.reset();
	}
}
