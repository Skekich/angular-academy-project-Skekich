import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
	const password = control.get('password');
	const passwordConfirm = control.get('passwordConfirm');
	const noMatch: boolean = password != passwordConfirm;

	return noMatch ? { passwordError: true } : null;
}
