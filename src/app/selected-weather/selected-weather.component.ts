import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-selected-weather',
  templateUrl: './selected-weather.component.html',
  styleUrls: ['./selected-weather.component.scss']
})
export class SelectedWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('mock');
  }

}
