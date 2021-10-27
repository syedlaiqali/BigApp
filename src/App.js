// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  FormControl,
  Pagination,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Dragger } from "./Dragger";

function App() {
  const [data, setData] = useState([]);
  const [srchData, setSrchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setData(result.data);
    setSrchData(result.data);
  }, []);

  useEffect(() => {
    const filter = data.filter(
      (item) => item.name.toUpperCase().includes(searchText.toUpperCase()) > 0
    );
    setSrchData([...filter]);
  }, [searchText]);

  return (
    <div className="App">
      <img src="./bigApp.png" className="logo" />
      <span className="logo-name">BigApp Company</span>
      <Row>
        <Col>
          <FormControl
            type="text"
            className="search-box"
            placeholder="Search Here..."
            onChange={(e) => setSearchText(e.target.value)}
          ></FormControl>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <span className="header">FULL NAME</span>
        </Col>
        <Col lg={2}>
          <span className="header">PHONE</span>
        </Col>
        <Col lg={2}>
          <span className="header">USER NAME</span>
        </Col>
        <Col lg={3}>
          <span className="header">COMPANY NAME</span>
        </Col>
      </Row>
      <br />
      {srchData !== undefined &&
        srchData.length > 0 &&
        srchData.map((item) => {
          return (
            <Row>
              <Col lg={5}>
                <span
                  style={{ fontWeight: "700", color: "hsl(240, 50%, 70%)" }}
                >
                  {item.name}
                </span>
                <br />
                <span>{item.email}</span>
              </Col>
              <Col lg={2}>
                <span>{item.phone}</span>
              </Col>
              <Col lg={2}>
                <span>{item.username}</span>
              </Col>
              <Col lg={3}>
                <span>{item.company.name}</span>
              </Col>
              <hr />
            </Row>
          );
        })}
      <br />
      <Row>
        <Col>
          <span style={{ margin: "20px" }}>Items</span>
          <DropdownButton
            style={{ display: "inline-block" }}
            id="dropdown-basic-button"
            title={data.length}
            variant="outline-primary"
          >
            {data.map((item) => (
              <Dropdown.Item href="#/action-1">{item.name}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        <Col>
          <Pagination style={{ float: "right" }}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
      <Dragger />
    </div>
  );
}

export default App;
