import { Component, ChangeDetectionStrategy } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IRegisterUserData } from 'src/app/interfaces/registerUserData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-user-container',
	templateUrl: './user-container.component.html',
	styleUrls: ['./user-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserContainerComponent {
	constructor(private authService: AuthService) {}

	public onNewUserRegister(registerData: IRegisterUserData): void {
		this.authService
			.onUserRegister(registerData)
			.pipe(
				catchError((error) => {
					return throwError(error.status);
				})
			)
			.subscribe((registerData) => {
				console.log(registerData);
			});
	}
}
