import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-routes',
  templateUrl: './secondary-routes.component.html',
  styleUrls: ['./secondary-routes.component.scss'],
})
export class SecondaryRoutesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  programaticAuxRoute() {
    this.router.navigate(['', { outlets: { sidebarOutlet: 'showuploader' } }]);
  }
}
