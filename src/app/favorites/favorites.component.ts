import { Component, OnInit, OnDestroy } from '@angular/core';
import { Favorite } from '../shared/interfaces/favorite';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  favorites: Favorite[];
  subscription: Subscription;
  constructor(private store: Store<{
    LocationState: {
      // selectedLocation: SelectedLocationState,
      favorites: Favorite[]
    }
  }>) { }

  ngOnInit(): void {
   this.subscription =  this.store.pipe(select('LocationState', 'favorites'))
      .pipe(tap(res => { console.log('SSSSSSSSSSSfavorites updated', res) })).subscribe(
        (favorites: Favorite[]) => {
          this.favorites = favorites;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
