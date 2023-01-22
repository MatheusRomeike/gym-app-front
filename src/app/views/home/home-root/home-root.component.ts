import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss'],
})
export class HomeRootComponent {
  breadcrumb = [{ name: 'Home' }];
}
