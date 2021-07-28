import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ILoginUserData } from 'src/app/interfaces/loginUserData.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-user-login-container',
	templateUrl: './user-login-container.component.html',
	styleUrls: ['./user-login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginContainerComponent {
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

	public onUserLogin(loginData: ILoginUserData): void {
		this.isLoading$.next(true);
		this.authService
			.onUserLogin(loginData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				}),
				catchError((error) => {
					this.snackBar.open('Incorrect password', 'Close');
					return throwError(error.status);
				})
			)
			.subscribe(() => {
				this.router.navigate(['']);
			});
	}
}
