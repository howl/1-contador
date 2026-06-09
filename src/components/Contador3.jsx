import PropTypes from 'prop-types'
import { useState } from 'react'
import Boton from './Boton'

const Contador3 = ({ valor: valorInicial = 25, min, max, step }) => {
  valorInicial = Math.max(Math.min(valorInicial, max), min)
  const [valor, setValor] = useState(valorInicial)

  const handleSumar = (ev) => setValor((valor) => Math.min(valor + step, max))
  const handleRestar = (ev) => setValor((valor) => Math.max(valor - step, min))
  const handleReset = (ev) => setValor((valor) => valorInicial)

  return (
    <>
      <h1>Contador versión 3</h1>
      <h2>El valor es: {valor}</h2>
      <Boton etiqueta='+' funcion={handleSumar} disableCondition={valor >= max} />
      <Boton etiqueta='-' funcion={handleRestar} disableCondition={valor <= min} />
      <Boton etiqueta='Reset' funcion={handleReset} disableCondition={valor === valorInicial} />
    </>
  )
}

Contador3.propTypes = {
  valorInicial: PropTypes.number
}

Contador3.defaultProps = {
  valorInicial: 25
}

export default Contador3
