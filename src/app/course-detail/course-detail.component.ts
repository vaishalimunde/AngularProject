import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Course }         from '../courses';
import { CoursesService }  from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: [ './course-detail.component.css' ]
})
export class CourseDetailComponent implements OnInit {
  courses: Course;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(id)
      .subscribe(courses => this.courses = courses);
  }

  goBack(): void {
    this.location.back();
  }
}