import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import filterStudentsByGrade from './utils/filterByGrade.ts';
import { students, type Grade } from './data/students.ts';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App students={students} />
  </StrictMode>,
);

let selectedGrade: Grade = 'ALL';

function renderApp() {
  const filtered = filterStudentsByGrade(students, selectedGrade)
  root.render(<App students={filtered} />);
}

renderApp();

export function setSelectedGrade(grade: string) {
  selectedGrade = grade as Grade;
  renderApp();
}