import React, { useState } from "react";
import "./create.css";
import { Row, Col } from "react-bootstrap";
import { addUpload, getDta } from "../../Config/firebase";
import Input from "../Input/input";
import swal from "sweetalert";
import Button from "../Button/button";
import Navbar from "../Navb-Bar/navbar";
import { useNavigate } from "react-router-dom";
export default function UploadAdds() {
  const [userValue, setUserValue] = useState({});
  // const [renderData, setRenderData] = useState();
  const [file, setfile] = useState();
  const navigate = useNavigate();

  const value = (e, key) => {
    setUserValue({ ...userValue, [key]: e.target.value });
  };

  const addsData = async () => {
    try {
      await addUpload(userValue, file);
      navigate("/home");
    } catch (e) {
      await swal({
        title: e.message,
        text: "",
        icon: "warning",
        button: "Ok",
      });
    }
  };

  // const revice = async () => {
  //   var result = await getAdds();
  //   setRenderData(result);
  //   // console.log("Add Collection Data Set In State -->>>", result[0].title);
  //   // console.log("milla--->>>", renderData);
  // };
  //  const showEmail = async () => {
  //     const result = await getUser();
  //     setRenderData(result)
  //     console.log("data--->>",result)
  //     console.log("milla",renderData)
  //   }
  return (
    <>
      <Navbar />
      <Row className="adds-Card-Main-Row">
        <Col className="add-Card-Col" xs={10} sm={10} md={3} lg={3} xl={3}>
          <Col className="heading-Col" xs={11} sm={12} md={12} lg={12} xl={12}>
            <h4>Add Adds</h4>
          </Col>
          <Row className="input-Main-Row">
            <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
              <Input
                className="title-Input"
                onChange={(e) => {
                  value(e, "title");
                }}
                placeholder="Title :"
              />
            </Col>
            <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
              <Input
                className="title-Input"
                onChange={(e) => {
                  value(e, "price");
                }}
                placeholder="Price :"
              />
            </Col>
            <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
              <Input
                className="title-Input"
                onChange={(e) => {
                  value(e, "detail");
                }}
                placeholder="Detail :"
              />
            </Col>
            <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
              <Input
                className="title-Input"
                type="file"
                onChange={(e) => {
                  setfile(e.target.files[0]);
                }}
              />
            </Col>
            <Col className="button-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
              <Button
                className="submit-Button"
                onClick={addsData}
                Text={"Submit"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
