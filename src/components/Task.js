import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, changeTaskState } from "../redux/Actions/tasks";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={10}>
              <span className={task.isDone ? "done" : null}>
                <strong>{task.name}</strong>: {task.description} -
              </span>
              <Button
                variant="link"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Supprimer
              </Button>
            </Col>
            <Col sm={2}>
              <Button
                variant={task.isDone ? "danger" : "success"}
                onClick={() => dispatch(changeTaskState(task.id))}
                className="container"
              >
                {task.isDone ? "Non complétée" : "Complétée"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Task;
