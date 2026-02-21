import './App.css'
import StudentList from './components/StudenList'
import FilterControls from './components/FilterControls'

function App() {
  return (
    <>
      <h1>Report Card Grader</h1>
      <div id='studentGradesSection'>
        <StudentList/>
      </div>

    </>
  )
}

export default App
