import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { Location } from '../../interfaces/location';
import { Input } from '../../interfaces/input';
import { WeatherService } from '../../services/weather.service';
import { Forecast } from '../../interfaces/forecast';
import { MessageService } from 'primeng/api';

@Injectable()
export class LocationsEffects {
  constructor(
    private actions$: Actions,
    private actionsW$: Actions,
    private searchService: SearchService,
    private weatherService: WeatherService,
    private messageService: MessageService
  ) { }
  loadSearch$ = createEffect(() => this.actions$.pipe(
    ofType('[Search Load] Load Search Results'),
    mergeMap(
      (search: Input) => this.searchService.getResults(search.input)
        .pipe(
          catchError((err) => {
            this.messageService.add({
              key: 'tc', severity: 'error', summary: `${err.message}`, detail: `${err.message}`,
              life: 7000, closable: true
            });
            return EMPTY;
          }),
          map((suggestions: Location[]) => ({ type: '[Search API]  Update Search Results', suggestions })),
          catchError((err) => {
            this.messageService.add({
              key: 'tc', severity: 'error', summary: `${err.message}`, detail: `${err.message}`,
              life: 7000, closable: true
            });
            return EMPTY;
          })
        )
    )
  )
  );
  loadCurrentWeather$ = createEffect(() => this.actionsW$.pipe(
    ofType('[SelectedWeather Load]  Load Current Weather'),
    mergeMap(
      (input: { selectedLocation: Location }) => this.weatherService.getCurrentWeather(input.selectedLocation.Key)
        .pipe(
          map((currentWeather) => ({ type: '[SelectedWeather API]  Update Current Weather', currentWeather })),
          catchError((err) => {
            this.messageService.add({
              key: 'tc', severity: 'error', summary: `${err.message}`, detail: `${err.message}`,
              life: 7000, closable: true
            });
            return EMPTY;
          })
        )
    )
  )
  );
  loadForecast$ = createEffect(() => this.actionsW$.pipe(
    ofType('[SelectedWeather Load]  Load Current Weather'),
    mergeMap(
      (input: { selectedLocation: Location }) => this.weatherService.getForecast(input.selectedLocation.Key)
        .pipe(
          map((forecast: Forecast) => ({ type: '[SelectedWeather API]  Update Forecast', forecast })),
          catchError((err) => {
            this.messageService.add({
              key: 'tc', severity: 'error', summary: `${err.message}`, detail: `${err.message}`,
              life: 7000, closable: true
            });
            return EMPTY;
          })
        )
    )
  )
  );


}
