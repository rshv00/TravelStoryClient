import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Like} from '../models/Like';
import {environment} from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class LikeService {
  private baseUrl = environment.apiUrl + '/api/likes';

  constructor(
    private http: HttpClient) {
  }

  /** GET likes from the server */
  getLikes(contentId: number, contentType: string): Observable<Like[]> {
    const params = new HttpParams().set('contentId', contentId.toString())
      .set('contentType', contentType);
    return this.http.get<Like[]>(this.baseUrl, {params: params})
      .pipe(
        catchError(this.handleError('getLikes', []))
      );
  }

  /** POST: add a new like to the server */
  addLike(like: Like): Observable<Like> {
    return this.http.post<Like>(this.baseUrl, like, httpOptions).pipe(
      catchError(this.handleError<Like>('addLike'))
    );
  }

  /** DELETE: delete the like from the server */
  deleteLike(like: Like | number): Observable<Like> {
    const id = typeof like === 'number' ? like : like.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Like>(url, httpOptions).pipe(
      catchError(this.handleError<Like>('deleteLike'))
    );
  }

  /**
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
