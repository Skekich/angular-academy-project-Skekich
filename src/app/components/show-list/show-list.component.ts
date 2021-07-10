import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IShows } from 'src/app/models/IShows';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: ['./show-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {
	@Input() shows: Array<IShows>;
}
