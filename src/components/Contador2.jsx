import PropTypes from 'prop-types'
import { useState } from 'react'

const Contador2 = ({ valor: valorInicial = 25, min, max, step }) => {
  valorInicial = Math.max(Math.min(valorInicial, max), min)
  const [valor, setValor] = useState(valorInicial)

  const handleOperar = (ev) => {
    setValor((valor) => {
      switch (ev.target.dataset.operacion) {
        case 'sumar': return Math.min(valor + step, max)
        case 'restar': return Math.max(valor - step, min)
        case 'reiniciar': return valorInicial
      }
    })
  }

  return (
    <>
      <h1>Contador versión 2</h1>
      <h2>El valor es: {valor}</h2>
      <button
        data-operacion='sumar'
        onClick={handleOperar}
      >+</button>
      <button
        data-operacion='restar'
        onClick={handleOperar}
      >-</button>
      <button
        data-operacion='reiniciar'
        onClick={handleOperar}
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
