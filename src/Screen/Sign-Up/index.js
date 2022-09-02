import React, { useState } from "react";
import "./index.css";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import { Row, Col, Container } from "react-bootstrap";
import { signUp } from "../../Config/firebase";
import ClipLoader from "react-spinners/ClipLoader";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({});
  const [loader, setLoader] = useState(false);
  const [file, setfile] = useState();
  const navigate = useNavigate();

  const value = (e, key) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const signup = async () => {
    setLoader(true);
    try {
      const result = await signUp(form, file);
      navigate("/home");
    } catch (error) {
      swal({
        title: error.message,
        text: "",
        icon: "error",
        button: "Ok",
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Container>
        <Row className="Card-Main-RoW">
          <Col
            className="Sign-Up-Card-Col"
            xs={11}
            sm={11}
            md={4}
            lg={4}
            xl={4}
          >
            <Col
              className="heading-Col"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <h3>Sign Up </h3>
            </Col>
            <Row className="input-Main-Row">
              <Col
                className="input-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <Input
                  className="email-Input"
                  placeholder="Enter The Name:"
                  type="text"
                  onChange={(e) => value(e, "name")}
                />
              </Col>
              <Col
                className="input-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <Input
                  onChange={(e) => value(e, "email")}
                  className="email-Input"
                  placeholder="Enter The Email :"
                  type="email"
                />
              </Col>
              <Col
                className="input-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <Input
                  onChange={(e) => value(e, "age")}
                  className="email-Input"
                  placeholder="Enter The Age :"
                  type="age"
                />
              </Col>
              <Col
                className="input-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <Input
                  className="email-Input"
                  type="file"
                  onChange={(e) => setfile(e.target.files[0])}
                />
              </Col>
              <Col
                className="input-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <Input
                  onChange={(e) => value(e, "password")}
                  className="email-Input"
                  placeholder="Enter The Password :"
                  type="password"
                />
              </Col>
              <Col
                className="button-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                {loader ? (
                  <ClipLoader size={20} />
                ) : (
                  <Button
                    onClick={signup}
                    className="sign-Up-Button"
                    Text={"Sign-Up"}
                  />
                )}
              </Col>
              <Col
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
                style={{ textAlign: "center" }}
              >
                <p
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Go to Login
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
