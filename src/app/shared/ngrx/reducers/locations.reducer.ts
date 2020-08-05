import { Action, createReducer, on } from '@ngrx/store';
import * as LocationActions from '../actions/locations.actions';
import { Location } from '../../interfaces/location';
import { SelectedLocationState } from '../../interfaces/selected-location-state';
import { Favorite } from '../../interfaces/favorite';

export interface LocationState {
  selected: string;
  suggestions: Location[];
  selectedLocation: SelectedLocationState;
  favorites: Favorite[];
}

export const initialState: LocationState = {
  selected: null,
  suggestions: [],
  selectedLocation: {
    details: null,
    currentWeather: null,
    forecast: null,
  },
  favorites: []
};

const locationsReducer = createReducer(
  initialState,
  on(LocationActions.searchLoad, (state, payload) => ({ ...state, selected: payload.input })),
  on(LocationActions.searchLoadSuccess, (state, payload) => ({ ...state, suggestions: payload.suggestions })),
  on(LocationActions.selectedWeatherLoad, (state, payload) => {
    return ({
      ...state, selectedLocation:
        { ...state.selectedLocation, details: payload.selectedLocation }
    });
  }),
  on(LocationActions.selectedWeatherLoadSuccess, (state, payload) => {
    return ({
      ...state, selectedLocation:
        { ...state.selectedLocation, currentWeather: payload.currentWeather[0] }
    });
  }),
  on(LocationActions.selectedWeatherLoadForecastSuccess, (state, payload) => {
    return ({
      ...state, selectedLocation:
        { ...state.selectedLocation, forecast: payload.forecast }
    });
  }),
  on(LocationActions.addFavorite, (state, payload) => {
    const favoritesTmp = state.favorites.map(elem => elem);
    favoritesTmp.push(payload.favorite);
    return (
      {
        ...state, favorites: favoritesTmp
      }
    );
  }),
  on(LocationActions.removeFavorite, (state, payload) => {
    const favoritesTmp = state.favorites.filter(elem => elem.location.Key !== payload.favoriteKey);
    return (
      {
        ...state, favorites: favoritesTmp
      }
    );
  })
);

export function locationsReducerFunc(state: LocationState | undefined, action: Action) {
  return locationsReducer(state, action);
}
