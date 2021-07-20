import { IRegisterUserData } from '../interfaces/registerUserData.interface';

export class RegisterUser {
	constructor(registerData: IRegisterUserData) {
		this.email = registerData.email;
		this.password = registerData.password;
		this.password_confirmation = registerData.passwordConfirm;
	}

	public email: string;
	public password: string;
	public password_confirmation: string;
}
