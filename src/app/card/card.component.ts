import { Component, OnInit, Input } from '@angular/core';
import { DailyForecast } from '../shared/interfaces/daily-forecast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() dailyForecast: DailyForecast;
  constructor() { }
  dailyForecast$: Observable<DailyForecast>;
  ngOnInit(): void {
  }

}
