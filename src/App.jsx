import './App.css'
import Contador from './components/Contador'

function App() {
  return (
    <>
      <Contador valor={5} min={3} max={15} step={2} />
    </>
  )
}

export default App
