import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {Location} from '../interfaces/location';
import {suggstionsMock} from '../../../assets/mocks/suggestions-mock';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  key = '5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx';
  suggstionsMock: Location[] = suggstionsMock;
  constructor(private http: HttpClient) { }
  getResults(input: string) {
    let params = new HttpParams().set('q', input);
    params = params.set('apikey', this.key);
    return this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete`, { params });
  }
}
