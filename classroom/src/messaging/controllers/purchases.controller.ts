import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { CoursesService } from '../../services/courses.service';
import { EnrollmentsService } from '../../services/enrollment.service';
import { StudentsService } from '../../services/students.service';

interface PurchaseCreatedPayload {
  customer: {
    authUserId: string;
  };
  product: {
    id: string;
    title: string;
    slug: string;
  };
}
/**
 * Os controllers no nestjs não são apenas responsáveis por ouvir eventos http/rota
 * como nos padrões Rest/MVC. No caso a seguir, o controller está sendo responsável
 * por ouvir mensagens dos topics do Kafka
 */
@Controller()
export class PurchasesController {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
    private coursesService: CoursesService,
  ) {}

  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) {
    let student = await this.studentsService.getStudentByAuthUserId(
      payload.customer.authUserId,
    );

    console.log('STUDENT', student);

    if (!student) {
      student = await this.studentsService.createStudent({
        authUserId: payload.customer.authUserId,
      });
    }

    let course = await this.coursesService.getCourseBySlug(
      payload.product.slug,
    );

    if (!course) {
      course = await this.coursesService.createCourse({
        title: payload.product.title,
        slug: payload.product.slug,
      });
    }

    await this.enrollmentsService.createEnrollment({
      studentId: student.id,
      courseId: course.id,
    });
  }
}
