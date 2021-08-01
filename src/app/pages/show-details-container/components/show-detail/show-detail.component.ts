import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailComponent {
	@Input() show: Show | null;

	public layout$: Observable<ILayout>;

	constructor(breakpointsObserver: BreakpointObserver) {
		this.layout$ = breakpointsObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}
}
