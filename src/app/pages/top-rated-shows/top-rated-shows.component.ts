import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-top-rated-shows',
	templateUrl: './top-rated-shows.component.html',
	styleUrls: ['./top-rated-shows.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedShowsComponent implements OnInit {
	public shows: Array<Show>;

	constructor(private showService: ShowService) {}

	ngOnInit() {
		this.shows = this.showService.getTopRated();
	}
}
