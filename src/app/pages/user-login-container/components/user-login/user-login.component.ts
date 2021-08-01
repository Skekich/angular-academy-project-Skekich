import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { ILoginUserData } from 'src/app/interfaces/loginUserData.interface';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
	@Output() userLogin: EventEmitter<ILoginUserData> = new EventEmitter();
	public layout$: Observable<ILayout>;

	constructor(private fb: FormBuilder, breakpointObserver: BreakpointObserver) {
		this.layout$ = breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	public userLoginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});

	public onLogin(): void {
		this.userLogin.emit(this.userLoginFormGroup.value);
		this.userLoginFormGroup.reset();
	}
}
