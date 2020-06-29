import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class LinkDataService {
  private linksUrl = 'api/links';

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.linksUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getLink(id: number): Observable<Link> {
    // if (id === 0) {
    //   return of(this.initializeLink());
    // }
    const url = `${this.linksUrl}/${id}`;
    return this.http.get<Link>(url)
      .pipe(
        tap(data => console.log('getLink: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createLink(Link: Link): Observable<Link> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    Link.id = null;
    return this.http.post<Link>(this.linksUrl, Link, { headers })
      .pipe(
        tap(data => console.log('createLink: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteLink(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.linksUrl}/${id}`;
    return this.http.delete<Link>(url, { headers })
      .pipe(
        tap(data => console.log('deleteLink: ' + id)),
        catchError(this.handleError)
      );
  }

  updateLink(Link: Link): Observable<Link> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.linksUrl}/${Link.id}`;
    return this.http.put<Link>(url, Link, { headers })
      .pipe(
        tap(() => console.log('updateLink: ' + Link.id)),
        // Return the Link on an update
        map(() => Link),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}