import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IUploadFile } from 'src/app/interfaces/uploadFile.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-show-user',
	templateUrl: './show-user.component.html',
	styleUrls: ['./show-user.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowUserComponent {
	@Input() userImage: string;
	@Output() isUploaded: EventEmitter<boolean> = new EventEmitter();
	public filesForUpload: Array<IUploadFile> = new Array();

	constructor(private userService: UserService, private sanitizer: DomSanitizer) {}

	public addFiles(files: FileList | null): void {
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
}
