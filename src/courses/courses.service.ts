import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    {
      id: '2',
      name: 'teste',
      description: 'teste',
      tags: ['teste1', 'teste0'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const result: Course = this.courses.find((course) => course.id === id);
    if (result) {
      return result;
    } else {
      throw new HttpException(
        `Course ID: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
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
