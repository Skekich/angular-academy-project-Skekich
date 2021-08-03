import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';

@Component({
	selector: 'app-user-image',
	templateUrl: './user-image.component.html',
	styleUrls: ['./user-image.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserImageComponent {
	@Input() userImage: string;
	public layout$: Observable<ILayout>;

	constructor(breakpointObserver: BreakpointObserver) {
		this.layout$ = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}
}
