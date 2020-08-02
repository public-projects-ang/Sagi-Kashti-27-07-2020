import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../shared/interfaces/location';
import { Store, select } from '@ngrx/store';
import { searchLoad, selectedWeatherLoad } from '../shared/ngrx/actions/locations.actions';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { telAviv } from 'src/assets/default-location';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  locationName: string;
  subscription: Subscription;
  filteredLocations: Location[];
  constructor(private store: Store<{ LocationState: { suggestions: Location[] } }>,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.pipe(select('LocationState', 'suggestions')).subscribe(
      suggestions => {
        this.filteredLocations = suggestions;
      }
    );
    console.log('this.activatedRoute.snapshot.queryParams = ');
    console.log(this.activatedRoute.snapshot.queryParams);
    if (this.activatedRoute.snapshot.queryParams && !this.activatedRoute.snapshot.queryParams.isNavigation) {
      console.log('################################### inside this.activatedRoute.snapshot.queryParams = ');
      console.log(this.activatedRoute.snapshot.queryParams);
      this.onLocationSelect(telAviv);
    }
  }

  filterLocations(input: string) {
    if (input.indexOf(',') !== -1) {
      input = input.substring(0, input.indexOf(','));
    }
    this.store.dispatch(searchLoad({ input }));
  }
  onLocationSelect(selectedLocation: Location) {
    console.log('location selected = ');
    console.log(selectedLocation);
    this.store.dispatch(selectedWeatherLoad({ selectedLocation }));
    this.locationName = `${selectedLocation.LocalizedName},${selectedLocation.Country.LocalizedName},${selectedLocation.AdministrativeArea.ID}`;
  }
  onDropdownClick(input) {
    if (input.length > 0) {
      this.filteredLocations = this.filteredLocations.slice(0);
      this.filterLocations(input);
    } else {
      this.messageService.add({
        key: 'tc', severity: 'info', summary: 'Please Type Location', detail: 'No input',
        life: 7000, closable: true
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
