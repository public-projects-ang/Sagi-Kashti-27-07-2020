import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import {Location} from '../../interfaces/location';
import { Input } from '../../interfaces/input';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../interfaces/weather';

@Injectable()
export class LocationsEffects {
  constructor(
    private actions$: Actions,
    private actionsW$: Actions,
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}
  loadSearch$ = createEffect(() => this.actions$.pipe(
    // tap(search => {
    //   console.log('[Search Load] Load Search Results search !!!!!!!!!!!!!!!!! =');
    //   console.log(search);
    // }),
    ofType('[Search Load] Load Search Results'),
    mergeMap(
      (search: Input) => this.searchService.getResults(search.input)
      .pipe(
        // tap(res => console.log('getResults res effect =', res)),
        map((suggestions: Location[]) => ({ type: '[Search API]  Update Search Results', suggestions } )),
        catchError(() => EMPTY)
      )
      )
    )
  );
  loadCurrentWeather$ = createEffect(() => this.actionsW$.pipe(
    tap(input => {
      console.log('[SelectedWeather Load]  Load Current Weather aaa input !!!!!!!!!!!!!!!!! =');
      console.log(input);
    }),
    ofType('[SelectedWeather Load]  Load Current Weather'),
    mergeMap(
      (input: {selectedLocation: Location}) => this.weatherService.getCurrentWeather(input.selectedLocation.Key)
      .pipe(
        tap(res => console.log('getCurrentWeather res effect =', res)),
        map((currentWeather) => ({ type: '[SelectedWeather API]  Update Current Weather', currentWeather} )),
        catchError(() => EMPTY)
      )
      )
    )
  );


}
