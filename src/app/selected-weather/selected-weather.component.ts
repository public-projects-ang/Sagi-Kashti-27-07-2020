import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Store, select } from '@ngrx/store';
import { SelectedLocationState } from '../shared/interfaces/selected-location-state';

@Component({
  selector: 'app-selected-weather',
  templateUrl: './selected-weather.component.html',
  styleUrls: ['./selected-weather.component.scss']
})
export class SelectedWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService, private store: Store<{
    LocationState: {
      selectedLocation: SelectedLocationState
    }
  }>) { }
  selectedLocationState: SelectedLocationState;
  isMetricTemp = true;
  ngOnInit(): void {
    this.store.pipe(select('LocationState', 'selectedLocation')).subscribe(
      (selectedLocationState: SelectedLocationState) => {
        console.log(' selectedLocationState = ');
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
