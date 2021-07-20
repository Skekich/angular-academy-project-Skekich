import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRegisterUserData } from '../interfaces/registerUserData';
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
}
