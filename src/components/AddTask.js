import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Actions/tasks";
import {  Button, Container,Row,Col } from "react-bootstrap";

const AddTask = () => {
  const [task, setTask] = useState({name:"",description:""});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (task.name) {
      dispatch(addTask({ id: Math.random(), ...task, isDone: false }));
      setTask({name:"",description:""});
    } else {
      alert("Le champs nom est vide !!!");
    }
  };

  return (
    <form onSubmit={handleChange} >
      <Container>
      <Row>
      <Col sm={4}>
      <p>Nom de la Tache</p>
      <input
        type="text"
        name="name"
        onChange={(e) => setTask({...task,name:e.target.value})}
        value={task.name}
      />
      </Col>
      <Col sm={4}>
        <p>Description de la tache en une ligne</p>
        <input
        type="text"
        name="description"
        onChange={(e) => setTask({...task,description:e.target.value})}
        value={task.description}
      />
       </Col>
          <Col sm={4}>
            <br/>
      <Button variant="primary" onClick={handleChange}>
        Ajouter la Tâche
      </Button>
      </Col>
      </Row>
      </Container>
    </form>
  );
};

export default AddTask;
