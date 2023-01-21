import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
})
export class DefaultPageComponent implements OnInit {
  @Input() items: any[] = [];

  constructor() {}

  ngOnInit() {}
}
