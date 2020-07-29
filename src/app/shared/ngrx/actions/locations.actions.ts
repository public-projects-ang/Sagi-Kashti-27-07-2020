import { createAction, props } from '@ngrx/store';
import { Location } from '../../interfaces/location';


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
  props<{ selectedLocation: Location }>());
