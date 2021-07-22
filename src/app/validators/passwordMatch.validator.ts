import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
	const password: string = formGroup.controls.password.value;
	const passwordConfirm: string = formGroup.controls.passwordConfirm.value;
	const formGropValidator = password === passwordConfirm;

	return formGropValidator ? null : { passwordValidationError: true };
}
