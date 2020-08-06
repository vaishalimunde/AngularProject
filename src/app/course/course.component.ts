import { Component, OnInit } from '@angular/core';
import { Course } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];
 

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  
  getCourses(): void {
    this.courseService.getCourses().subscribe(course => this.courses = course);
  }
}
