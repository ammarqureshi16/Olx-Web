import React, { useState } from "react";
import "./index.css";
import Button from "../../Components/Button/button";
import Input from "../../Components/Input/input";
import swal from "sweetalert";
import { Row, Col, Container } from "react-bootstrap";
import { login } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
  const [form, setform] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const value = (e, key) => {
    setform({ ...form, [key]: e.target.value });
  };
  const loginNow = async () => {
    setLoader(true);
    try {
      const user = await login(form);
      navigate("/home");
      setLoader(false);
    } catch (error) {
      swal({
        title: error.message,
        text: "",
        icon: "error",
        button: "Ok",
      });
      setLoader(false);
    }
  };

  return (
    <>
      <Container>
        <Row className="Card-Main-RoW">
          <Col className="login-Card-Col" xs={11} sm={11} md={10} lg={4} xl={4}>
            <Col
              className="heading-Col"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <h3>Login</h3>
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
                  onChange={(e) => {
                    value(e, "email");
                  }}
                  className="email-Input"
                  placeholder="Enter The Email :"
                  type={"email"}
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
                  onChange={(e) => {
                    value(e, "password");
                  }}
                  className="email-Input"
                  placeholder="Enter The Password :"
                  type={"password"}
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
                  <>
                    <ClipLoader size={20} />
                  </>
                ) : (
                  <>
                    <Button
                      onClick={loginNow}
                      className="sign-Up-Button"
                      Text={"Login"}
                    />
                  </>
                )}
              </Col>
              <Col
                style={{ textAlign: "center" }}
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <label
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go to Sign Up
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
