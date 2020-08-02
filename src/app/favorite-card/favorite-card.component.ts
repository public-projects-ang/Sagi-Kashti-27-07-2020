import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../shared/interfaces/favorite';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {
@Input() favorite: Favorite;
  constructor() { }

  ngOnInit(): void {
  }

}
