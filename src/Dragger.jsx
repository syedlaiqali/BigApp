import React from "react";
import { FormControl, Row, Col } from "react-bootstrap";
import data from "./data.json";
import Draggable from "react-draggable";

export const Dragger = () => {
  return (
    <div>
      <Row>
        <Col>
          <FormControl placeholder="Search Permission" />
          {data.map((item) => {
            return (
              <Draggable>
                <p className="draggable">{item.name}</p>
              </Draggable>
            );
          })}
        </Col>
        <Col style={{ backgroundColor: "#ffff00" }}>
          <FormControl placeholder="Search Permission" />
        </Col>
      </Row>
    </div>
  );
};
