import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // 5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx
  // DPU6SrzqEqDpmhqxFqECfj6a6O6GIzmI
  key = 'DPU6SrzqEqDpmhqxFqECfj6a6O6GIzmI';

  mockWeather: Weather[] = [{
    EpochTime: 1596021720,
    HasPrecipitation: false,
    IsDayTime: true,
    Link: 'http://www.accuweather.com/en/mg/londokomanana/229017/current-weather/229017?lang=en-us',
    LocalObservationDateTime: '2020-07-29T14:22:00+03:00',
    MobileLink: 'http://m.accuweather.com/en/mg/londokomanana/229017/current-weather/229017?lang=en-us',
    PrecipitationType: null,
    Temperature: {
      Imperial: {
        Unit: 'F',
        UnitType: 18,
        Value: 79,
      },
      Metric: {
        Unit: 'C',
        UnitType: 17,
        Value: 25.9
      },
    },
    WeatherIcon: 4,
    WeatherText: 'Clouds and sun'
  }];
  constructor(private http: HttpClient) { }
  // curl -X GET "http://dataservice.accuweather.com/currentconditions/v1/213225?apikey=5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx&details=false"
  // https://dataservice.accuweather.com/currentconditions/v1/229017?apikey=5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx
  getCurrentWeather(location) {
    // console.log(' getCurrentWeather()  a ');
    // console.log(' input = ');
    // console.log(location);
    const params = new HttpParams().set('apikey', this.key);
    // tslint:disable-next-line: object-literal-shorthand
    // return this.http.get(`https://dataservice.accuweather.com/currentconditions/v1/${location}`, { params: params }).pipe(
    //   tap((res: Location) => {
    //     console.log('getCurrentWeather res s = ');
    //     console.log(res);
    //   })
    // );
    // console.log(' this.mockListRes = ');
    // console.log(this.mockListRes);
    return of(this.mockWeather);
  }
}
