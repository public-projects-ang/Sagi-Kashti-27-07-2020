import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SelectedLocationState } from '../shared/interfaces/selected-location-state';
import { addFavorite, removeFavorite } from '../shared/ngrx/actions/locations.actions';
import { FavoritesService } from '../shared/services/favorites.service';
import { Favorite } from '../shared/interfaces/favorite';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-weather',
  templateUrl: './selected-weather.component.html',
  styleUrls: ['./selected-weather.component.scss']
})
export class SelectedWeatherComponent implements OnInit, OnDestroy {

  constructor(private favoritesService: FavoritesService, private store: Store<{
    LocationState: {
      selectedLocation: SelectedLocationState,
      favorites: Favorite[]
    }
  }>) { }
  selectedLocationState: SelectedLocationState;
  isMetricTemp = true;
  isFavorite = false;
  favorites: Favorite[];
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    this.isFavorite = false;
    this.subscriptions.push(this.store.pipe(select('LocationState', 'selectedLocation')).subscribe(
      (selectedLocationState: SelectedLocationState) => {
        this.selectedLocationState = selectedLocationState;
        if (this.selectedLocationState.details && this.selectedLocationState.currentWeather && this.favorites) {
          const favorite = this.favorite();
          this.isFavorite = this.favoritesService.isfavoriteExist(favorite, this.favorites);
        }
      }
    ));
    this.subscriptions.push(this.store.pipe(select('LocationState', 'favorites')).subscribe(
      (favorites: Favorite[]) => {
        this.favorites = favorites;
        const favorite = this.favorite();
        this.isFavorite = this.favoritesService.isfavoriteExist(favorite, this.favorites);
      }
    ));
  }
  addFavorite() {
    const favorite = this.favorite();
    if (this.selectedLocationState.details.Key && !this.favoritesService.isfavoriteExist(favorite, this.favorites)) {
      this.store.dispatch(addFavorite({ favorite }));
    } else {
      alert('Could not add to favorites !!');
    }
  }
  removeFavorite() {
    const favorite = this.favorite();
    if (this.selectedLocationState.details.Key && this.favoritesService.isfavoriteExist(favorite, this.favorites)) {
      this.store.dispatch(removeFavorite({ favoriteKey: this.selectedLocationState.details.Key }));
    } else {
      alert('Could not remove from favorites !!');
    }
  }
  favorite() {
    const favorite: Favorite = {
      location: this.selectedLocationState.details,
      weather: this.selectedLocationState.currentWeather
    };
    return favorite;
  }
  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
