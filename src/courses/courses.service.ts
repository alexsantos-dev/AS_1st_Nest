import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: '1',
      name: 'Nest básico',
      description: 'Curso básico do framework Nest',
      tags: ['Typescript', 'node', 'Nest', 'Backend'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === id);
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCoursesDto: any) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    return (this.courses[indexCourse] = updateCoursesDto);
  }

  delete(id: string) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    if (indexCourse >= 0) {
      return this.courses.splice(indexCourse, 1);
    }
  }
}
