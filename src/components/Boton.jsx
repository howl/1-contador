const Boton = ({ etiqueta, funcion, disableCondition }) => {
  return (
    <button
      disabled={disableCondition}
      onClick={funcion}
    >{etiqueta}</button>
  )
}

export default Boton
