import { Component } from '@angular/core';
import { AttendanceChartComponent } from '../attendance-chart/attendance-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentDate = new Date();
  currentAdmin: string = "John Doe";
}
