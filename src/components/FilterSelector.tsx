import '../styles/FilterSelector.css';
import '../data/students';
import { Grades } from '../data/students';

function FilterSelector() {
    return (
        <div id='filterSelector'>
            <h3>Filter students by grade:</h3>
            <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Select a grade below</option>
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