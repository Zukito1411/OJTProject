import { Component } from '@angular/core';
interface SideBarToggle {
  screenWidth: number;
  collapsed: boolean;}
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  isSideBarCollapsed = false;
  screenWidth = 0;

  onToggleSideBar(): void {
    // Add implementation for the method here
  }
}

