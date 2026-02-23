import '../styles/FilterSelector.css';
import { Grades } from '../data/students'
import { setSelectedGrade } from '../main'

function FilterSelector() {
  return (
    <div id='filterSelector'>
      <h3>Filter students by grade:</h3>
      <select
        className="select"
        onChange={(e) => setSelectedGrade(e.target.value)}
      >
        {Grades.map((grade) =>
          <option key={grade} value={grade}>
            {grade}
          </option>
        )}
      </select>
    </div>
  )
}

export default FilterSelector;