import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
}

export class ScheduleComponent {
  id: number | undefined;
  facultyId: number | undefined;
  date: Date | undefined;
  time: string | undefined;
}
