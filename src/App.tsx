import './App.css'
import InfoBox from './components/InfoBox'
import StudentList from './components/StudenList'

function App() {
  return (
    <>
      <h1>Report Card Grader</h1>
      <div id='studentGradesSection'>
        <StudentList/>
        <div id='informationBoxSection'>
          <h3>Information box</h3>
          <InfoBox/>
        </div>
        
      </div>

    </>
  )
}

export default App
