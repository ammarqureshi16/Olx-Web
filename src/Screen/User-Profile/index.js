import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import Navbar from "../../Components/Navb-Bar/navbar";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <>
      {/* User Profile Detail Work Get */}
      <Navbar />
      <Container>
        <Row className="flex">
          <Col
            className="flex"
            style={{ height: "150px" }}
            xs={12}
            sm={12}
            md={12}
            xl={12}
            lg={12}
          >
            <h3
              style={{
                fontFamily: "cursive",
              }}
            >
              Profile
            </h3>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Col
              style={{
                display: "flex",
                fontFamily: "cursive",
                justifyContent: "flex-start",
                height: "60px",
              }}
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <h4>About Me </h4>
            </Col>
            <Col
              style={{
                fontFamily: "cursive",
                height: "220px",
                display: "flex",
                justifyContent: "flex-start",
              }}
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <p>
                I am an allround web developer. I am a senior programmer with
                good knowledge of front-end techniques. Vitae sapien
                pellentesque habitant morbi tristique senectus et. Aenean sed
                adipiscing diam donec adipiscing tristique risus.
              </p>
            </Col>
          </Col>
          <Col className="flex" xs={12} sm={12} md={4} lg={4} xl={4}>
            <img
              style={{ borderRadius: "100px", height: "200px" }}
              src={user && user.url}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontFamily: "cursive",
                height: "60px",
              }}
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <h4>Detail </h4>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontFamily: "cursive",
                height: "35px",
              }}
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <h5>Name: </h5>
            </Col>
            <Col
              className="profile-Work"
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <p>{user && user.name}</p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontFamily: "cursive",
                height: "35px",
              }}
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <h5>Age: </h5>
            </Col>
            <Col
              className="profile-Work"
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <p>{user && user.age}</p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontFamily: "cursive",
                height: "35px",
              }}
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <h5>Email: </h5>
            </Col>
            <Col
              className="profile-Work"
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <p>{user && user.email}</p>
            </Col>
          </Col>
        </Row>
      </Container>

      {/* Profile Upload Card Work Start */}
      {/* <Row className="profile-Card-Main-Row">
        <Col className="profile-Card-Col" xs={10} sm={10} md={3} lg={3} xl={3}>
          <Col
            className="profile-Heading"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <h1>Profile</h1>
          </Col>
          <Row className="profile-Input-Main-Row">
            <Col className="flex" xs={12} sm={12} md={11} lg={11} xl={11}>
              <img src={picURL} className="profile-Pic" />
            </Col>
            <Col
              className="profile-Input-col"
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <Input
                placeholder="Enter your Name :"
                type={"name"}
                className="profile-Inputs"
                onChange={(e) => value(e, "name")}
              />
            </Col>
            <Col
              className="profile-Input-col"
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <Input
                type="file"
                className="profile-Inputs"
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
            </Col>
            <Col
              className="profile-Input-col"
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
            >
              <Input
                className="profile-Inputs"
                type={"age"}
                placeholder="Enter your age :"
                onChange={(e) => value(e, "age")}
              />
            </Col>
            <Col className="button-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                className="submit-Button"
                onClick={submit}
                Text={"Submit"}
              />
            </Col>
          </Row>
        </Col>
      </Row> */}
    </>
  );
}
