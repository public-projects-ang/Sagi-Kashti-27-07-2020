import { Component, OnInit } from '@angular/core';
import { SelectedLocationState } from '../shared/interfaces/selected-location-state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  selectedLocationState: SelectedLocationState;
  constructor(private store: Store<{
    LocationState: {
      selectedLocation: SelectedLocationState
    }
  }>) { }
  ngOnInit(): void {
    this.store.pipe(select('LocationState', 'selectedLocation')).subscribe(
      (selectedLocationState: SelectedLocationState) => {
        console.log('forecast selectedLocationState = ');
        console.log(selectedLocationState);
        // this.weatherService.getCurrentWeather(selectedLocation.Key).subscribe(
        //   res => {
        //     console.log(' res = ');
        //     console.log(res);
        //   }
        // );
        this.selectedLocationState = selectedLocationState;
      }
    );
  }

}
