import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SharedService {
	private message: Subject<boolean> = new Subject();
	public sharedMessage = this.message.asObservable();

	public nextMessage(message: boolean) {
		this.message.next(message);
	}
}
