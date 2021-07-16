import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-top-rated-shows',
	templateUrl: './top-rated-shows.component.html',
	styleUrls: ['./top-rated-shows.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedShowsComponent {
	public shows$: Observable<Array<Show>> = this.showService.getTopRated();

	constructor(private showService: ShowService) {}
}
