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
    <div>
      <h2>Contador versión 2</h2>
      <h3>El valor es: {valor}</h3>
      <button
        disabled={valor >= max}
        data-operacion='sumar'
        onClick={handleOperar}
      >+</button>
      <button
        disabled={valor <= min}
        data-operacion='restar'
        onClick={handleOperar}
      >-</button>
      <button
        disabled={valor === valorInicial}
        data-operacion='reiniciar'
        onClick={handleOperar}
      >Reset</button>
    </div>
  )
}

Contador2.propTypes = {
  valorInicial: PropTypes.number
}

Contador2.defaultProps = {
  valorInicial: 25
}

export default Contador2
