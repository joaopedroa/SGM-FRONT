import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/geolocalizacao', title: 'Geolocalização',  icon: 'dashboard', class: '' },
    { path: '/carteira-projetos', title: 'Carteira de Projetos',  icon: 'dashboard', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
 
}
