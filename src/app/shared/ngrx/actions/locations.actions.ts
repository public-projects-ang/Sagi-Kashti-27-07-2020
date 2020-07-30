import { createAction, props } from '@ngrx/store';
import { Location } from '../../interfaces/location';
import { Weather } from '../../interfaces/weather';
import { Forecast } from '../../interfaces/forecast';


export const searchLoad = createAction(
  '[Search Load] Load Search Results',
  props<{ input: string }>());


export const searchLoadSuccess = createAction(
  '[Search API]  Update Search Results',
  props<{ suggestions: any[] }>());


export const selectedWeatherLoad = createAction(
  '[SelectedWeather Load]  Load Current Weather',
  props<{ selectedLocation: Location }>());

export const selectedWeatherLoadSuccess = createAction(
  '[SelectedWeather API]  Update Current Weather',
  props<{ currentWeather: Weather }>());

export const selectedWeatherLoadForecastSuccess = createAction(
    '[SelectedWeather API]  Update Forecast',
    props<{ forecast: Forecast }>());

