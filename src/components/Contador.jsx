import PropTypes from 'prop-types'
import { useState } from 'react'

const Contador = ({ valor: valorInicial = 25, min, max, step }) => {
  valorInicial = Math.max(Math.min(valorInicial, max), min)
  const [valor, setValor] = useState(valorInicial)

  const handleSumar = (ev) => setValor((valor) => Math.min(valor + step, max))
  const handleRestar = (ev) => setValor((valor) => Math.max(valor - step, min))
  const handleReset = (ev) => setValor((valor) => valorInicial)

  return (
    <div>
      <h2>Contador versión 1</h2>
      <h3>El valor es: {valor}</h3>
      <button
        disabled={valor >= max}
        onClick={handleSumar}
      >+</button>
      <button
        disabled={valor <= min}
        onClick={handleRestar}
      >-</button>
      <button
        disabled={valor === valorInicial}
        onClick={handleReset}
      >Reset</button>
    </div>
  )
}

Contador.propTypes = {
  valorInicial: PropTypes.number
}

Contador.defaultProps = {
  valorInicial: 25
}

export default Contador
