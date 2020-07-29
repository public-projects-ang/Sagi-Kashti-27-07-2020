import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/services/search.service';
import { Location } from '../shared/interfaces/location';
import { Store, select } from '@ngrx/store';
import { searchLoad } from '../shared/ngrx/actions/locations.actions';

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
        console.log(' suggestions = ');
        console.log(suggestions);
        this.filteredLocations = suggestions;
      }
    );
  }

  filterLocations(input: string) {
    console.log(' filterLocations ');
    console.log('before input = ');
    console.log(input);

    if (input.indexOf(',') !== -1) {
      input = input.substring(0, input.indexOf(','));
    }
    console.log('after input = ');
    console.log(input);
    console.log('after input = ');
    console.log(input === 'London');
    console.log(input.length);
    console.log(typeof (input));
    this.store.dispatch(searchLoad({ input }));
  }
  onLocationSelect(selectedLocation: Location) {
    console.log(' selectedLocation = ');
    console.log(selectedLocation);
    this.locationName = `${selectedLocation.LocalizedName},${selectedLocation.Country.LocalizedName},${selectedLocation.AdministrativeArea.ID}`;
  }
  onDropdownClick(input){
    console.log('  onDropdownClick input = ');
    console.log(input);
    console.log(this.filteredLocations);
    this.filteredLocations = this.filteredLocations.slice(0);
    this.filterLocations(input);
  }

}
