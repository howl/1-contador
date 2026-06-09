const Boton4 = ({ etiqueta, valor, setValor, valorInicial, min, max, step, disableCondition, dataOperacion }) => {
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
    <button
      disabled={disableCondition}
      data-operacion={dataOperacion}
      onClick={handleOperar}
    >{etiqueta}</button>
  )
}

export default Boton4
