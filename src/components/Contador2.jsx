import PropTypes from 'prop-types'
import { useState } from 'react'

const Contador2 = ({ valor: valorInicial = 25, min, max, step }) => {
  valorInicial = Math.max(Math.min(valorInicial, max), min)
  const [valor, setValor] = useState(valorInicial)

  const operar = (operacion) => {
    switch (operacion) {
      case 'sumar':
        return Math.min(valor + step, max)
      case 'restar':
        return Math.max(valor - step, min)
      case 'reiniciar':
        return valorInicial
    }
  }

  return (
    <>
      <h1>Contador versión 2</h1>
      <h2>El valor es: {valor}</h2>
      <button
        onClick={() => setValor(operar('sumar'))}
      >+</button>
      <button
        onClick={() => setValor(operar('restar'))}
      >-</button>
      <button
        onClick={() => setValor(operar('reiniciar'))}
      >Reset</button>
    </>
  )
}

Contador2.propTypes = {
  valorInicial: PropTypes.number
}

Contador2.defaultProps = {
  valorInicial: 25
}

export default Contador2
