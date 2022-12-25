import { Component, Input, OnInit } from '@angular/core';
import {
  faChartLine,
  faBox,
  faCartShopping,
  faGear,
  faCircleInfo,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Analytics',
      icon: faChartLine,
    },
    {
      number: '2',
      name: 'Products',
      icon: faBox,
    },
    {
      number: '3',
      name: 'Orders',
      icon: faCartShopping,
    },
    {
      number: '4',
      name: 'Settings',
      icon: faGear,
    },
    {
      number: '5',
      name: 'About',
      icon: faCircleInfo,
    },
    {
      number: '6',
      name: 'Contact',
      icon: faPhone,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
