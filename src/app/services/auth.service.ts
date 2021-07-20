import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILoginUserData } from '../interfaces/loginUserData.interface';
import { IRegisterUserData } from '../interfaces/registerUserData.interface';
import { RegisterUser } from './registerUser.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	private registerUser(userData: IRegisterUserData): RegisterUser {
		return new RegisterUser(userData);
	}

	public onUserRegister(userData: IRegisterUserData): Observable<IRegisterUserData> {
		return this.http.post<IRegisterUserData>('https://tv-shows.infinum.academy/users', this.registerUser(userData));
	}

	public onUserLogin(loginData: ILoginUserData): Observable<ILoginUserData> {
		return this.http.post<ILoginUserData>('https://tv-shows.infinum.academy/users/sign_in', loginData);
	}
}
