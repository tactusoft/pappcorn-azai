import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/private/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
  { path: '/private/table', title: 'Reportes', icon: 'pe-7s-note2', class: '' },
  {
    path: '/private/typography',
    title: 'Indicadores',
    icon: 'pe-7s-news-paper',
    class: ''
  },
  {
    path: '/private/notifications',
    title: 'Formularios',
    icon: 'pe-7s-upload',
    class: ''
  },
  {
    path: '/private/user',
    title: 'Usuarios',
    icon: 'pe-7s-user',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
