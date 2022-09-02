import React, { useState } from "react";
import "./navbar.css";
import {
  Row,
  Col,
  Navbar,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { IoIosCar } from "react-icons/io";
import { BiLayer, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Olx from "../../Assets/Images/olx text.PNG";
import OlxBlack from "../../Assets/Images/olx black.PNG";
import Input from "../Input/input";
import swal from "sweetalert";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

export default function Navbars() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);

  const logout = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        swal({
          title: "Log Out!",
          text: "",
          icon: "success",
          button: "Ok",
        });
        navigate("/login");
      })
      .catch((e) => {
        swal({
          title: e.message,
          text: "",
          icon: "error",
          button: "Ok",
        });
      });
  };
  return (
    <>
      <Row className="main-Row-Navbar">
        <Col className="ol-Text-Col" xs={3} sm={3} md={3} lg={1} xl={1}>
          <img
            onClick={() => {
              navigate("/home");
            }}
            style={{ height: "50px", width: "100%" }}
            src={Olx}
          />
        </Col>
        <Col
          className="navbar-Icon-Main-Col"
          xs={8}
          sm={8}
          md={8}
          lg={3}
          xl={3}
        >
          <Col className="car-Icon-Col" xs={6} sm={6} md={6} lg={6} xl={6}>
            <IoIosCar size={35} />
            <lable>MOTORS</lable>
          </Col>
          <Col className="property-Col" xs={6} sm={6} md={6} xl={6} lg={6}>
            <BiLayer size={34} />
            <lable>PROPERTY</lable>
          </Col>
        </Col>
        <Row className="flex">
          <Col className="black-Olx" xs={3} sm={3} md={1} lg={1} xl={1}>
            <img
              onClick={() => {
                navigate("/home");
              }}
              src={OlxBlack}
            />
          </Col>
          <Col className="flex" xs={9} sm={9} md={9} lg={3} xl={3}>
            <Col
              className="select-Input-Col"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <BiSearch style={{ paddingLeft: "8px" }} size={32} />
              <Input
                type={"select"}
                placeholder={"Select Location"}
                className="select-Input"
              />
            </Col>
          </Col>
          <Col className="flex" xs={12} sm={12} md={12} lg={7} xl={7}>
            <Input
              type={"text"}
              placeholder={"Search..."}
              className="search-Input"
            />
            <Col className="search-Icon-Col" xs={3} sm={3} md={3} lg={1} xl={1}>
              <BiSearch color={"white"} size={32} />
            </Col>
          </Col>
        </Row>
      </Row>

      <Row
        style={{
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
          borderBottom: "solid #ededed",
        }}
      >
        <Navbar expand="lg">
          <Container fluid>
            <Nav.Link
              style={{
                dispay: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              id="text-Color"
              href="#action1"
            >
              <img
                style={{
                  height: "50px",
                  width: "30%",
                  borderRadius: "25px",
                }}
                src={user && user.url}
              />
              {user && user.name}
            </Nav.Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                style={{
                  dispay: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link
                  id="text-Color"
                  href="#action1"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/profile");
                  }}
                  id="text-Color"
                  href="#action1"
                >
                  Profile
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/myAdds");
                  }}
                  id="text-Color"
                  href="#action1"
                >
                  My-Adds
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/uploadAdds");
                  }}
                  id="text-Color"
                  href="#action1"
                >
                  Upload Adds
                </Nav.Link>
              </Nav>
              <Form className="flex">
                <Button
                  onClick={logout}
                  id="text-Color"
                  variant="outline-success"
                >
                  Logout
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </>
  );
}
