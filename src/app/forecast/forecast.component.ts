import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectedLocationState } from '../shared/interfaces/selected-location-state';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  selectedLocationState: SelectedLocationState;
  subscription: Subscription;
  constructor(private store: Store<{
    LocationState: {
      selectedLocation: SelectedLocationState
    }
  }>) { }
  ngOnInit(): void {
    this.subscription = this.store.pipe(select('LocationState', 'selectedLocation')).subscribe(
      (selectedLocationState: SelectedLocationState) => {
        this.selectedLocationState = selectedLocationState;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
