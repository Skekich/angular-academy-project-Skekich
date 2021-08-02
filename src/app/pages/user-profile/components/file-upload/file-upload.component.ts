import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IUploadFile } from 'src/app/interfaces/uploadFile.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
	public filesForUpload: Array<IUploadFile> = new Array();

	constructor(private sanitizer: DomSanitizer, private userService: UserService) {}

	addFiles(files: FileList | null): void {
		if (files) {
			for (let i = 0; i < files.length; i++) {
				let tempFile = files[i];
				let tempUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(tempFile));
				this.filesForUpload.push({ file: tempFile, url: tempUrl });
			}
		}

		this.userService.uploadImage(this.filesForUpload[0].file).subscribe();
	}

	filesDropped(dragEvent: DragEvent): void {
		if (dragEvent.dataTransfer) {
			let files = dragEvent.dataTransfer.files;
			this.addFiles(files);
		}
	}
}
