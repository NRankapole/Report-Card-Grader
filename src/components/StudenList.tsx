import "../data/students.ts";
import { students } from "../data/students.ts";
import "../styles/StudentList.css"
import {CalculateGrade, AssignGradeColourClass} from "../utils/gradeCalculator.ts";

function StudentList() {
    return (
        <div className="overflow-x-auto">
            <h2>Student Marks</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mark</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.mark}%</td>
                            <td className={AssignGradeColourClass(student.mark)}>{CalculateGrade(student.mark)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default StudentList;