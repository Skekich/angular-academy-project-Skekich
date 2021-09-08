import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appDrag]',
})
export class DragDirective {
	@Output() files: EventEmitter<DragEvent> = new EventEmitter();

	@HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		if (event.dataTransfer) this.files.emit(event);
	}

	@HostListener('dragover', ['$event']) public onDragOver(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
	}

	@HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
	}
}
