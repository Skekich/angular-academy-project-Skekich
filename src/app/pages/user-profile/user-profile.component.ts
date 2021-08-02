import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/services/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
	constructor(private userService: UserService) {}

	public user$: Observable<User> = this.userService.getUser().pipe(
		map((user) => {
			return user;
		})
	);
}
