import { useState } from "react";
import Card from "./Card";
import Message from "./Message";

const Form = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/;

    if (name.trim().length < 3) {
      setErrorMessage("El nombre debe tener al menos 3 caracteres y no debe comenzar con espacios en blanco.");
      setShowCard(false);
      setShowMessage(false);
      return;
    }
    if (!nameRegex.test(name)) {
      setErrorMessage("El nombre solo debe contener letras.");
      setShowCard(false);
      setShowMessage(false);
      return;
    }
    if (course.length < 6) {
      setErrorMessage("El curso debe tener al menos 6 caracteres.");
      setShowCard(false);
      setShowMessage(false);
      return;
    }
    
    setErrorMessage("");
    setShowCard(true);
    setShowMessage(true);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name" // Agregar id
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="course">Curso:</label>
        <input
          id="course" // Agregar id
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br />
        <button>Enviar</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {showCard && <Card name={name} course={course} />}
      {showMessage ? <Message name={name} course={course} /> : null}
    </div>
  )
}


export default Form