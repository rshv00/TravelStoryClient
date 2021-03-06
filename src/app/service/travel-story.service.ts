import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TravelStory} from '../models/TravelStory';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TravelStoryService {
  private baseUrl = environment.apiUrl + '/travelStory/';
  private addUrl = environment.apiUrl + '/travelStory/byUser/';
  private addTravelStoryUrl = environment.apiUrl + '/travelStory/add';


  constructor(private httpClient: HttpClient) {
  }

  getTravelStoriesByUser(id: number): Observable<TravelStory[]> {
    return this.httpClient.get<TravelStory[]>(this.addUrl + id)
      .pipe(
        catchError(this.handleError('getTravelStoriesByUser', []))
      );
  }

  deleteTravelStory(id: number): Observable<TravelStory> {
    const url = `${this.baseUrl}${id}`;
    return this.httpClient.delete<TravelStory>(url, httpOptions).pipe(
      catchError(this.handleError<TravelStory>('deleteTravelStoryById'))
    );
  }

  addTravelStory(travelStory: TravelStory): Observable<TravelStory> {
    return this.httpClient.put<TravelStory>(this.addTravelStoryUrl, travelStory).pipe(
      catchError(this.handleError<TravelStory>('deleteTravelStoryById')));
  }

  editTravelStory(travelStory: TravelStory): Observable<TravelStory> {
    return this.httpClient.put<TravelStory>(this.baseUrl + 'edit', travelStory, httpOptions).pipe(
      catchError(this.handleError<TravelStory>('editTravelStory'))
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
