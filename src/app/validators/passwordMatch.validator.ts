import { FormGroup } from '@angular/forms';

export function passwordMatchValidator(formGroup: FormGroup) {
	let password: string = formGroup.controls.password.value;
	let passwordConfirm: string = formGroup.controls.passwordConfirm.value;
	console.log(password === passwordConfirm ? null : { passwordValidationError: true });
	return password === passwordConfirm ? null : { passwordValidationError: true };
}
