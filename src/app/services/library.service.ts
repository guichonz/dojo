import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LibraryDTO } from '../shared-data/library-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  };

  searchValue: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  // observable
    getAllLibraries(): Observable<LibraryDTO[]> {
    return this.http.get<LibraryDTO[]>('http://localhost:8080/libraries');
  }

   // observable
    addLibrary(library: LibraryDTO): Observable<string> {
    return this.http.post<string>('http://localhost:8080/libraries', library, this.httpOptions);
  }

  // observable
    getLibrary(id: string): Observable<LibraryDTO> {
    return this.http.get<LibraryDTO>('http://localhost:8080/libraries/' + id);
  }

  // observable
    updateLibrary(library: LibraryDTO): Observable<any> {
    return this.http.put<any>('http://localhost:8080/libraries/' + library.id, library, this.httpOptions);
  }

  // observable
    deleteLibrary(id: string): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/libraries/' + id);
  }

}
