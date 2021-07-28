import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuthData } from '../interfaces/authData.interface';
import { ILoginUserData } from '../interfaces/loginUserData.interface';
import { IRegisterUserData } from '../interfaces/registerUserData.interface';
import { RegisterUser } from './registerUser.model';
import { StorageService } from './storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly authDataKey: string = 'authData';
	public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));

	constructor(private http: HttpClient, private storage: StorageService) {}

	private registerUser(userData: IRegisterUserData): RegisterUser {
		return new RegisterUser(userData);
	}

	public onUserRegister(userData: IRegisterUserData): Observable<HttpResponse<IRegisterUserData>> {
		return this.http
			.post<IRegisterUserData>('https://tv-shows.infinum.academy/users', this.registerUser(userData), {
				observe: 'response',
			})
			.pipe(
				tap((response: HttpResponse<IRegisterUserData>) => {
					const uid: string | null = response.headers.get('uid');
					const token: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					if (uid && token && client) {
						this.saveAuthData({ uid, token, client });
						this.isLoggedIn$.next(true);
					}
				})
			);
	}

	public onUserLogin(loginData: ILoginUserData): Observable<HttpResponse<ILoginUserData>> {
		return this.http
			.post<ILoginUserData>('https://tv-shows.infinum.academy/users/sign_in', loginData, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<ILoginUserData>) => {
					const uid: string | null = response.headers.get('uid');
					const token: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					if (uid && token && client) {
						this.saveAuthData({ uid, token, client });
						this.isLoggedIn$.next(true);
					}
				})
			);
	}

	public logOut(): void {
		this.storage.remove(this.authDataKey);
		this.isLoggedIn$.next(false);
	}

	public getAuthData(): IAuthData | null {
		return this.storage.get(this.authDataKey);
	}

	private saveAuthData(authData: IAuthData): void {
		this.storage.add(this.authDataKey, authData);
	}
}
