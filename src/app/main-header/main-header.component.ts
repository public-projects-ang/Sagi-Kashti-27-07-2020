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
      { label: 'Info', icon: 'pi pi-fw pi-chart-bar', routerLink: 'home' },
      { label: 'Message', icon: 'pi pi-fw pi-calendar', routerLink: 'favorites' }
    ];
    this.activeItem = this.items3[0];
  }


}
