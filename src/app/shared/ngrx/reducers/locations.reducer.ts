import { Action, createReducer, on } from '@ngrx/store';
import * as LocationActions from '../actions/locations.actions';
import { Location } from '../../interfaces/location';
import { Weather } from '../../interfaces/weather';
import { SelectedLocationState } from '../../interfaces/selected-location-state';

export interface LocationState {
  selected: string;
  suggestions: Location[];
  selectedLocation: SelectedLocationState;
}

export const initialState: LocationState = {
  selected: null,
  suggestions: [],
  selectedLocation: {
    details: {
      Version: 1,
      Key: '229017',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Londokomanana',
      Country: {
        ID: 'MG',
        LocalizedName: 'Madagascar'
      },
      AdministrativeArea: {
        ID: 'M',
        LocalizedName: 'Mahajanga'
      }
    },
    currentWeather: null,
    forecast: []
  }
};

const locationsReducer = createReducer(
  initialState,
  // tslint:disable-next-line: max-line-length
  on(LocationActions.searchLoad, (state, payload) => { console.log('searchLoad action XXXXXX @@@@@@@@@ =', payload); return ({ ...state, selected: payload.input }); }),
  on(LocationActions.searchLoadSuccess, (state, payload) => { console.log('searchLoadSuccess action YYYY @@@@@@@@@ =', payload); return ({ ...state, suggestions: payload.suggestions }); }),
  on(LocationActions.selectedWeatherLoad, (state, payload) => {
    console.log('selectedWeatherLoad action YYYY @@@@@@@@@ =', payload); return ({
      ...state, selectedLocation:
        {...state.selectedLocation, details: payload.selectedLocation }
    });
  })
);

export function locationsReducerFunc(state: LocationState | undefined, action: Action) {
  return locationsReducer(state, action);
}
