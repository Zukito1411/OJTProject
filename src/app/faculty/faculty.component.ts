import { Component } from '@angular/core';
interface SideBarToggle {
  screenWidth: number;
  collapsed: boolean;}
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
   isSideBarCollapsed = false;
  screenWidth = 0;

  onToggleSideBar(): void {
    // Add implementation for the method here
  }
}

export class ScheduleComponent {
  id: number | undefined;
  facultyId: number | undefined;
  date: Date | undefined;
  time: string | undefined;
}
