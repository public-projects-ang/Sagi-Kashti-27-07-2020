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
  key = 'p7mcGBKmOHQ6Gad0QBaXD5iHGWpt4wwd';
  forecastRes = forecastRes;
  mockWeather: Weather[];
  constructor(private http: HttpClient) { }
  getCurrentWeather(location) {
    const params = new HttpParams().set('apikey', this.key);
    return this.http.get(`https://dataservice.accuweather.com/currentconditions/v1/${location}`, { params });
  }
  getForecast(location) {
    let params = new HttpParams().set('apikey', this.key);
    params = params.set('metric', 'true');
    return this.http.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}`, { params });
  }
}
