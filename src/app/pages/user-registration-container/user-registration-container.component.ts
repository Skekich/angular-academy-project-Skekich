import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-user-registration-container',
	templateUrl: './user-registration-container.component.html',
	styleUrls: ['./user-registration-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationContainerComponent {
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private authService: AuthService, private router: Router) {}

	public onNewUserRegister(registerData: IRegisterUserData): void {
		this.isLoading$.next(true);
		this.authService
			.onUserRegister(registerData)
			.pipe(
				delay(2000),
				finalize(() => {
					this.isLoading$.next(false);
				}),
				catchError((error) => {
					return throwError(error.status);
				})
			)
			.subscribe((registerData) => {
				console.log(registerData);
				this.router.navigate(['']);
			});
	}
}
