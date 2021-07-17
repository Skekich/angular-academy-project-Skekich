import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
	@Input() comment: string;
}
