/* eslint-disable react/prop-types */

const Card = ({ name, course }) => {
  return (
    <div>
      <h2>Información del Estudiante</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Curso:</strong> {course}</p>
    </div>
  )
}

export default Card