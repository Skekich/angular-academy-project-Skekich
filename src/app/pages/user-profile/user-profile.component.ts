import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
	constructor(private userService: UserService, private route: ActivatedRoute) {}

	public user$: Observable<User> = merge(this.route.paramMap, this.trigger$).pipe(
		switchMap(() => {
			return this.userService.getUser().pipe(
				map((user) => {
					return user;
				})
			);
		})
	);

	public onUpload(value: boolean) {
		this.trigger$.next(value);
	}
}
