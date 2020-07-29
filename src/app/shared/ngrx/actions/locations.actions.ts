import { createAction, props } from '@ngrx/store';


export const searchLoad = createAction(
  '[Search Load] Load Search Results',
  props<{ input: string }>());


export const numbersLoadedSuccess = createAction(
    '[Search API]  Update Search Results',
    props<{ suggestions: any[] }>());
