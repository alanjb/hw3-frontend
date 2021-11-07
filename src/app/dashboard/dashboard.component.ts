import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  templateUrl: '../dashboard/dashboard.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class DashboardComponent {
  title = "dashboard";

  constructor(
    private route: ActivatedRoute
  ) { }
}
