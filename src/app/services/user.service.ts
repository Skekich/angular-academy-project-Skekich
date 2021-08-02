import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	public getUser(): Observable<User> {
		return this.http.get<{ user: User }>('https://tv-shows.infinum.academy/users/me').pipe(
			map((response) => {
				return response.user;
			})
		);
	}

	public uploadImage(file: File): Observable<HttpResponse<User>> {
		const payload = new FormData();
		payload.append('image', file);

		return this.http.put<HttpResponse<User>>('https://tv-shows.infinum.academy/users', payload);
	}
}
