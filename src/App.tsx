import './App.css'
import FilterSelector from './components/FilterSelector'
import InfoBox from './components/InfoBox'
import StudentList from './components/StudenList'
import type { StudentProp } from './data/students';

function App( { students } : {students: StudentProp[] } ) {
  return (
    <>
      <h1>Report Card Grader</h1>
      <div id='studentGradesSection'>
        <StudentList students={students}/>
        <div id='informationBoxSection'>
          <InfoBox/>
          <FilterSelector/>
        </div>
      </div>

    </>
  )
}

export default App
