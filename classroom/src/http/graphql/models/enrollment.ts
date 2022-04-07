import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Student } from './student';
import { Course } from './course';

@ObjectType()
export class Enrollment {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  canceledAt: Date;

  @Field(() => Student)
  student: Student;

  //Just a reference to backend
  studentId: string;

  @Field(() => Course)
  course: Course;

  //Just a reference to backend
  courseId: string;
}
