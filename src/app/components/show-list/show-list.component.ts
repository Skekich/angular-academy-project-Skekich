import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: ['./show-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {
	@Input() shows: Array<any>;
}
