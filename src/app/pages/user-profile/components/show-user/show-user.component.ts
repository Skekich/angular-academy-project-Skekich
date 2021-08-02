import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-show-user',
	templateUrl: './show-user.component.html',
	styleUrls: ['./show-user.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowUserComponent {
	@Input() userImage: string;
}
