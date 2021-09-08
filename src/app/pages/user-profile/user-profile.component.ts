import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { User } from 'src/app/services/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
	private trigger$: Subject<boolean> = new Subject();
	public layout$: Observable<ILayout>;

	constructor(private userService: UserService, private route: ActivatedRoute, breakpointObserver: BreakpointObserver) {
		this.layout$ = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	public user$: Observable<User> = merge(this.route.paramMap, this.trigger$).pipe(
		switchMap(() => {
			return this.userService.getUser().pipe(
				map((user) => {
					console.log(user.image_url);
					return user;
				})
			);
		})
	);

	public onUpload(value: boolean) {
		this.trigger$.next(value);
	}
}
