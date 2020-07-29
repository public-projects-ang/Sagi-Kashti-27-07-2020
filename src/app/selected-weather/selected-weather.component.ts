import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Store, select } from '@ngrx/store';
import {Location} from '../shared/interfaces/location';
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
  selectedLocation: Location;
  ngOnInit(): void {
    this.store.pipe(select('LocationState', 'selectedLocation')).subscribe(
      (selectedLocation: SelectedLocationState) => {
        console.log(' selectedLocation = ');
        console.log(selectedLocation);
        // this.weatherService.getCurrentWeather(selectedLocation.Key).subscribe(
        //   res => {
        //     console.log(' res = ');
        //     console.log(res);
        //   }
        // );
        // this.selectedLocation = selectedLocation;
      }
    );

  }

}
