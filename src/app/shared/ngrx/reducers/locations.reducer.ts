import { Action, createReducer, on } from '@ngrx/store';
import * as LocationActions from '../actions/locations.actions';
import { Location } from '../../interfaces/location';

export interface LocationState {
  selected: string;
  suggestions: Location[];
}

export const initialState: LocationState = {
  selected: null,
  suggestions: []
};

const locationsReducer = createReducer(
  initialState,
  // tslint:disable-next-line: max-line-length
  on(LocationActions.searchLoad, (state, payload) => { console.log('searchLoad action XXXXXX @@@@@@@@@ =', payload); return ({ ...state, selected: payload.input }); }),
  on(LocationActions.numbersLoadedSuccess, (state, payload) => { console.log('numbersLoadedSuccess action YYYY @@@@@@@@@ =', payload); return ({ ...state, suggestions: payload.suggestions }); })
);

export function locationsReducerFunc(state: LocationState | undefined, action: Action) {
  return locationsReducer(state, action);
}
