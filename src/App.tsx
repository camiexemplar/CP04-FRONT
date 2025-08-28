import { Welcome } from './components/Welcome'
import { ExerciseList } from './components/ExerciseList'
import { MotivationalMessage } from './components/MotivationalMessage'

function App() {

  return (
    <>
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
