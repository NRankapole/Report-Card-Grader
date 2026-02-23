import type { Grade, StudentProp } from "../data/students";
import { CalculateGrade } from "./gradeCalculator";

export default function filterStudentsByGrade(students: StudentProp[],grade: Grade) {
  if (grade === "ALL") return students;

  return students.filter(student =>
    CalculateGrade(student.mark) === grade
  );
}