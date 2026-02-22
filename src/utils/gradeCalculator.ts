import "../data/students.ts"

export function CalculateGrade(mark: number): string {
    if (mark >= 80) return "A"
    else if (mark >= 70) return "B"
    else if (mark >= 60) return "C"
    else if (mark >= 50) return "D"
    else return "F"
}

export function AssignGradeColourClass(mark:number): string{
    const grade = CalculateGrade(mark)

  switch (grade) {
    case "A":
      return "excellent"
    case "B":
      return "good"
    case "C":
      return "moderate"
    case "D":
      return "belowAverage"
    default:
      return "fail"
  }
}
export default CalculateGrade;