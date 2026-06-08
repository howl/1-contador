const Boton = ({ etiqueta, funcion }) => {
  return (
    <button
      onClick={funcion}
    >{etiqueta}</button>
  )
}

export default Boton
