import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import {Location} from '../interfaces/location';
import {map, tap} from 'rxjs/operators';
import {suggstionsMock} from '../../../assets/mocks/suggestions-mock';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // wRKjvZFhHa9EruIMEcDP445Y1BjOAAlz
  // 5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx
  // 9VSapGOgUgtQisfD6e6lEcDGaFGzccMW
  // curl -X GET "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx&q=jerusal"
  key = 'DPU6SrzqEqDpmhqxFqECfj6a6O6GIzmI';
  suggstionsMock: Location[] = suggstionsMock;
  constructor(private http: HttpClient) { }
  getResults(input: string) {
    console.log(' getResults()  a ');
    console.log(' input = ');
    console.log(input);

    let params = new HttpParams().set('q', input);
    params = params.set('apikey', this.key);
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete`, { params: params })
    .pipe(
      tap(  (res: Location[]) => {
        console.log('@@@@@@@@@@@@@@@@@@@@ res s = ');
        console.log(res);
      })
    );
    // return of(this.suggstionsMock);
  }
}
