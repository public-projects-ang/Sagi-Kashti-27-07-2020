import { createAction, props } from '@ngrx/store';
import { Location } from '../../interfaces/location';
import { Weather } from '../../interfaces/weather';
import { Forecast } from '../../interfaces/forecast';
import { Favorite } from '../../interfaces/favorite';


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

export const addFavorite = createAction(
  '[Favorite Add]  Add to Favorites',
  props<{ favorite: Favorite }>());
export const removeFavorite = createAction(
  '[Favorite Remove]  Remove from Favorites',
  props<{ favoriteKey: string }>());

