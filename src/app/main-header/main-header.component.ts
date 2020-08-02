import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  items3: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items3 = [
      { label: 'home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
      { label: 'favorites', icon: 'pi pi-fw pi-heart', routerLink: 'favorites' }
    ];
    this.activeItem = this.items3[0];
  }


}
