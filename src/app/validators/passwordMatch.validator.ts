import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: FormGroup): ValidationErrors | null {
	const password: string = control.value['password'];
	const passwordConfirm: string = control.value['passwordConfirm'];
	const noMatch: boolean = password !== passwordConfirm;

	return noMatch ? { passwordError: true } : null;
}
