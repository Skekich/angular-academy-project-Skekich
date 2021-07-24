import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShow } from '../interfaces/show.interface';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShow> }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				return response.shows.map((showData: IShow) => new Show(showData));
			})
		);
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShow> }>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((response) => {
				return response.shows.map((showData: IShow) => new Show(showData));
			})
		);
	}

	public getShow(id: string): Observable<Show | null> {
		return this.http.get<{ show: IShow }>('https://tv-shows.infinum.academy/shows/' + id).pipe(
			map((response) => {
				return new Show(response.show);
			})
		);
	}
}
