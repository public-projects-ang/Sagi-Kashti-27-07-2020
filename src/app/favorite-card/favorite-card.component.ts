import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../shared/interfaces/favorite';
import { selectedWeatherLoad } from '../shared/ngrx/actions/locations.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {
@Input() favorite: Favorite;
  constructor(private router: Router, private store: Store<{}>) { }

  ngOnInit(): void {
  }
favoriteSelected(e) {
  console.log('favoriteSelected ');
  console.log(this.favorite.location);
  this.store.dispatch(selectedWeatherLoad({selectedLocation: this.favorite.location}));
  this.router.navigate(['/home'], {queryParams: {isNavigation: true}});
}

}
