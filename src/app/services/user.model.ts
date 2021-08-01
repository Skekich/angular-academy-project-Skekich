import { IUser } from '../interfaces/user.interface';

export class User {
	constructor(userData: IUser) {
		this.id = userData.id;
		this.email = userData.email;
		this.image_url = userData.imageUrl;
	}

	public id: string;
	public email: string;
	public image_url: string;
}
