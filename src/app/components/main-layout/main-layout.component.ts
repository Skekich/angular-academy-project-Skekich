import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
	public layout$: Observable<ILayout>;

	constructor(breakpointObserver: BreakpointObserver) {
		this.layout$ = breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}
}
