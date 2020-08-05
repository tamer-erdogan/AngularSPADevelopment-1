import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pm-child',
  templateUrl: './pm-child.component.html',
  styleUrls: ['./pm-child.component.scss'],
})
export class PmChildComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: number;
  readonly: boolean;

  ngOnInit() {
    this.useSnapShot();
    // this.useParamMap();
    // this.subscribeRoute();
  }

  useSnapShot() {
    // Notice bug when using snapshot
    this.id = this.route.snapshot.params['id'];
  }

  useParamMap() {
    this.route.paramMap.subscribe((params) => {
      console.log('paramMap:', params);
      this.id = +params.get('id');
    });

    this.route.queryParamMap.subscribe((qpm) => {
      console.log('paramMap:', qpm);
      this.readonly = qpm.get('readonly') == 'true';
    });
  }

  // Deprecated ng4+
  subscribeRoute() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.route.queryParams.subscribe((qps) => {
      this.readonly = qps['readonly'];
    });
  }
}
