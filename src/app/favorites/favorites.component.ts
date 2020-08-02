import { Component, OnInit } from '@angular/core';
import { Favorite } from '../shared/interfaces/favorite';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: Favorite[];
  constructor(private store: Store<{
    LocationState: {
      // selectedLocation: SelectedLocationState,
      favorites: Favorite[]
    }
  }>) { }

  ngOnInit(): void {
   this.store.pipe(select('LocationState', 'favorites'))
    .pipe(tap(res=> {console.log('SSSSSSSSSSSfavorites updated',res)})).subscribe(
      (favorites: Favorite[]) => {
        this.favorites = favorites;
      }
    );
    // .subscribe(
    //   (favorites: Favorite[]) => {
    //     console.log(' favorites Comp = ');
    //     console.log(favorites);
    //   }
    // );
  }

}
