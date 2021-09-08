import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILayout } from 'src/app/interfaces/layout.interface';
import { IUploadFile } from 'src/app/interfaces/uploadFile.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
	@Output() isUploaded: EventEmitter<boolean> = new EventEmitter();
	public filesForUpload: Array<IUploadFile> = new Array();
	public layout$: Observable<ILayout>;

	constructor(
		private sanitizer: DomSanitizer,
		private userService: UserService,
		breakpointsObserver: BreakpointObserver
	) {
		this.layout$ = breakpointsObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	addFiles(files: FileList | null): void {
		if (files) {
			for (let i = 0; i < files.length; i++) {
				let tempFile = files[i];
				let tempUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(tempFile));
				this.filesForUpload.push({ file: tempFile, url: tempUrl });
			}
		}

		this.userService.uploadImage(this.filesForUpload[0].file).subscribe(() => {
			this.isUploaded.emit(true);
		});
	}

	filesDropped(dragEvent: DragEvent): void {
		if (dragEvent.dataTransfer) {
			let files = dragEvent.dataTransfer.files;
			this.addFiles(files);
		}
	}
}
