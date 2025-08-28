import './App.css'
import { Welcome } from './components/Welcome'
import { ExerciseList } from './components/ExerciseList'
import { MotivationalMessage } from './components/MotivationalMessage'

function App() {

  return (
    <>
    <h1>hello world</h1>
    <Welcome />
    <ExerciseList />
     <MotivationalMessage 
        message="Com grandes poderes vem grandes responsabilidades"
        author="Tio ben"
     />
	
    </>
  )
}

export default App
