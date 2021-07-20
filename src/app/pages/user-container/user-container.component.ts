import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-user-container',
	templateUrl: './user-container.component.html',
	styleUrls: ['./user-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserContainerComponent {}
