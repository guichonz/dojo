import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryDTO } from '../shared-data/library-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  // observable
  getAllLibraries(): Observable<LibraryDTO[]> {
    return this.http.get<LibraryDTO[]>('http://localhost:8080/libraries');
  }
}
