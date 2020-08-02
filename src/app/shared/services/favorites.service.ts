import { Injectable } from '@angular/core';
import { Favorite } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }
  isfavoriteExist(favorite: Favorite, array: Favorite[]) {
    const favoriteIdx = array.findIndex(elem => {
      return elem.location.Key === favorite.location.Key;
    });

    return favoriteIdx !== -1;
  }
}
