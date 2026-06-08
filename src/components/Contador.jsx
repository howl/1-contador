import PropTypes from 'prop-types'
import { useState } from 'react'

const Contador = ({ valor: valorInicial = 25, min, max, step }) => {
  valorInicial = Math.max(Math.min(valorInicial, max), min)
  const [valor, setValor] = useState(valorInicial)

  return (
    <>
      <h1>Contador versión 1</h1>
      <h2>El valor es: {valor}</h2>
      <button
        onClick={() => setValor((valor) => Math.min(valor + step, max))}
      >+</button>
      <button
        onClick={() => setValor((valor) => Math.max(valor - step, min))}
      >-</button>
      <button
        onClick={() => setValor((valor) => valorInicial)}
      >Reset</button>
    </>
  )
}

Contador.propTypes = {
  valorInicial: PropTypes.number
}

Contador.defaultProps = {
  valorInicial: 25
}

export default Contador
