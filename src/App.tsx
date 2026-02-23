import './App.css'
import FilterSelector from './components/FilterSelector'
import InfoBox from './components/InfoBox'
import StudentList from './components/StudenList'

function App() {
  return (
    <>
      <h1>Report Card Grader</h1>
      <div id='studentGradesSection'>
        <StudentList/>
        <div id='informationBoxSection'>
          <InfoBox/>
          <FilterSelector/>
        </div>
      </div>

    </>
  )
}

export default App
