import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={require=(`Foto de ${props.imagen}`)}/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
            </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: props.testimonio }}></p>
        </div>
    </div>
  );
}