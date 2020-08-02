import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { Weather } from '../interfaces/weather';
import { forecastRes } from '../../../assets/mocks/forecast-mock';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // 5WQZn6KRKHepKjrGMjp8cZGlqEqIA7Hx
  // DPU6SrzqEqDpmhqxFqECfj6a6O6GIzmI
  // wRKjvZFhHa9EruIMEcDP445Y1BjOAAlz
  key = 'wRKjvZFhHa9EruIMEcDP445Y1BjOAAlz';
  forecastRes = forecastRes;
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
    console.log(' this.forecastRes = ');
    console.log(this.forecastRes);
    const params = new HttpParams().set('apikey', this.key);
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.get(`https://dataservice.accuweather.com/currentconditions/v1/${location}`, { params: params }).pipe(
      tap((res: Location) => {
        console.log('getCurrentWeather res s = ');
        console.log(res);
      })
    );
    // console.log(' this.mockListRes = ');
    // console.log(this.mockListRes);
    // return of(this.mockWeather);
  }
  getForecast(location) {
    console.log(' getForecast()  a ');
    console.log(' location = ');
    console.log(location);
    let params = new HttpParams().set('apikey', this.key);
    params = params.set('metric', 'true');
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}`, { params: params }).pipe(
      tap((res: Forecast) => {
        console.log('getForecast res s = ');
        console.log(res);
      })
    );

    // console.log(' this.forecastRes = ');
    // console.log(this.forecastRes);
    // return of(this.forecastRes);
  }
}
