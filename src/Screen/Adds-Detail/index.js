import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAddDetail } from "../../Config/firebase";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navb-Bar/navbar";
import Footer from "../../Components/Footer/footer";
import ClipLoader from "react-spinners/ClipLoader";
import Olx from "../../Assets/Images/user.jpg";
import { useSelector } from "react-redux";
// import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import Button from "../../Components/Button/button";
import { IoCallOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export default function AddsDetail() {
  const params = useParams();
  const [adds, setAdds] = useState();
  const { adIds } = params;

  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    const getAndSetAdds = async () => {
      const result = await getAddDetail(adIds);
      setAdds(result);
    };
    getAndSetAdds();
  });
  if (!adds) {
    return (
      <>
        <div className="flex" style={{ height: "480px" }}>
          <ClipLoader size={50} />
        </div>
      </>
    );
  }
  const { url, title, price, detail, uid } = adds;
  return (
    <>
      <Navbar />
      <Container>
        <Row className="row-Detail-Page">
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row className="flex">
              <Col
                style={{ border: "1px solid #e3e8e9", margin: "10px" }}
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <img width="100%" src={url} />
              </Col>
              <Col
                style={{
                  margin: "10px",
                  border: "1px solid #e3e8e9",
                  padding: "10px",
                }}
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <h5>Detail</h5>
                <Col
                  className="make-Text-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={11}
                  xl={11}
                >
                  <p>Make</p>
                  <p>{title}</p>
                  <p>Price</p>
                  <p>{price}</p>
                </Col>
                <Col
                  className="conidtion-Text-Col"
                  xs={8}
                  sm={8}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <p>Condition</p>
                  <p>{title}</p>
                </Col>
                <hr />
                <Col xs={12} sm={12} md={11} lg={11} xl={11}>
                  <h5>Description</h5>
                  <p>{detail}</p>
                </Col>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Row className="flex">
              <Col className="rs-Col" xs={11} sm={11} md={11} lg={11} xl={11}>
                <Col
                  style={{ height: 120 }}
                  xs={11}
                  sm={11}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <h4>Rs : {price}</h4>
                  <p>{title}</p>
                </Col>

                {/* <Col style={{border:"solid green"}} xs={12} sm={12} md={6} lg={6} xl={6}>
                <FiShare2 siz={20} />
                <AiOutlineHeart  size={20} />
                </Col> */}

                <Col
                  className="location-Time-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <p>Eminabad More, Gujranwala</p>
                  <p>2 minutes ago</p>
                </Col>
              </Col>

              <Col
                className="seller-Col"
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
              >
                <h3> Seller Description </h3>
                <Col
                  className="user-Image-Card-Col"
                  xs={8}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                >
                  <img
                    src={Olx}
                    style={{ height: "50px", borderRadius: "150px" }}
                  />
                  <h6>{user && user.name}</h6>
                </Col>
                <Col
                  className="location-Time-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <button className="chat-Button">Chat with seller</button>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="flex"
                  style={{ margin: "10px" }}
                >
                  <Col
                    className="call-Icon-Main-Col"
                    xs={11}
                    sm={11}
                    md={8}
                    lg={8}
                    xl={8}
                  >
                    <IoCallOutline size={20} />
                    <span>** *** ****</span>
                    <a href="#">Show Number</a>
                  </Col>
                </Col>
              </Col>
              <Col xs={11} sm={11} md={11} lg={11} xl={11}>
                <h6>ADD ID : {uid}</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
