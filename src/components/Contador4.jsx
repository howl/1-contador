import PropTypes from 'prop-types'
import { useState } from 'react'
import Boton4 from './Boton4'

const Contador4 = ({ valor: valorInicial = 25, min, max, step }) => {
  valorInicial = Math.max(Math.min(valorInicial, max), min)
  const [valor, setValor] = useState(valorInicial)

  return (
    <div>
      <h2>Contador versión 4</h2>
      <h3>El valor es: {valor}</h3>
      <Boton4
        etiqueta='+'
        valor={valor}
        setValor={setValor}
        valorInicial={valorInicial}
        min={min}
        max={max}
        step={step}
        disableCondition={valor >= max}
        dataOperacion='sumar' />
      <Boton4
        etiqueta='-'
        valor={valor}
        setValor={setValor}
        valorInicial={valorInicial}
        min={min}
        max={max}
        step={step}
        disableCondition={valor <= min}
        dataOperacion='restar' />
      <Boton4
        etiqueta='Reset'
        valor={valor}
        setValor={setValor}
        valorInicial={valorInicial}
        min={min}
        max={max}
        step={step}
        disableCondition={valor === valorInicial}
        dataOperacion='reiniciar' />
    </div>
  )
}

Contador4.propTypes = {
  valorInicial: PropTypes.number
}

Contador4.defaultProps = {
  valorInicial: 25
}

export default Contador4
