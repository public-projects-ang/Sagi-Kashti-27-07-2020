import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/services/search.service';
import { Location } from '../shared/interfaces/location';
import { Store, select } from '@ngrx/store';
import { searchLoad, selectedWeatherLoad } from '../shared/ngrx/actions/locations.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  locationName: string;
  filteredLocations: Location[];
  constructor(private searchService: SearchService, private store: Store<{ LocationState: { suggestions: Location[] } }>) { }

  ngOnInit(): void {
    this.store.pipe(select('LocationState', 'suggestions')).subscribe(
      suggestions => {
        this.filteredLocations = suggestions;
      }
    );
  }

  filterLocations(input: string) {
    if (input.indexOf(',') !== -1) {
      input = input.substring(0, input.indexOf(','));
    }
    this.store.dispatch(searchLoad({ input }));
  }
  onLocationSelect(selectedLocation: Location) {
    this.store.dispatch(selectedWeatherLoad({selectedLocation}));
    this.locationName = `${selectedLocation.LocalizedName},${selectedLocation.Country.LocalizedName},${selectedLocation.AdministrativeArea.ID}`;
  }
  onDropdownClick(input){
    this.filteredLocations = this.filteredLocations.slice(0);
    this.filterLocations(input);
  }

}
