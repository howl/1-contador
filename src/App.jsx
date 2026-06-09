import './App.css'
import Contador from './components/Contador'
import Contador2 from './components/Contador2'
import Contador3 from './components/Contador3'

function App() {
  return (
    <>
      <h1>Contadores</h1>
      <Contador valor={5} min={3} max={15} step={2} />
      <hr />
      <Contador2 valor={5} min={3} max={15} step={2} />
      <hr />
      <Contador3 valor={5} min={3} max={15} step={2} />
    </>
  )
}

export default App
