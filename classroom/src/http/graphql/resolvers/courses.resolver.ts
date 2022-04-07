import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthorizationGuard } from '../../auth/authorization.guard';
import { AuthUser, CurrentUser } from '../../auth/current-user';
import { CreateCourseInput } from '../inputs/create-course-input';

import { CoursesService } from '../../../services/courses.service';
import { StudentsService } from '../../../services/students.service';
import { EnrollmentsService } from '../../../services/enrollment.service';

import { Course } from '../models/course';

@Resolver(() => Course)
export class CoursesResolver {
  constructor(
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => Course)
  async course(@Args('id') id: string, @CurrentUser() user: AuthUser) {
    const student = await this.studentsService.getStudentByAuthUserId(user.sub);

    if (!student) {
      throw new Error('Student not found.');
    }

    const enrollment = await this.enrollmentsService.listByCourseAndStudent({
      courseId: id,
      studentId: student.id,
    });

    if (!enrollment) {
      //tratamento de erro que vem do nest
      throw new UnauthorizedException();
    }

    return this.coursesService.getCourseById(id);
  }

  @UseGuards(AuthorizationGuard)
  @Query(() => [Course])
  courses() {
    return this.coursesService.listAllCourses();
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Course)
  createCourse(@Args('data') data: CreateCourseInput) {
    return this.coursesService.createCourse(data);
  }
}
