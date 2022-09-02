import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import { getAdds } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";
import CustumNavbar from "../../Components/Navb-Bar/navbar";
import Cards from "../../Components/Card/card";
import AddImage from "../../Assets/Images/Add Image.PNG";
import SecAdd from "../../Assets/Images/add.PNG";
import Footer from "../../Components/Footer/footer";
import Silders from "../../Components/Silder/silder";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

export default function Home() {
  const [renderData, setRenderData] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    const renderAdds = async () => {
      try {
        var result = await getAdds();
        setRenderData(result);
      } catch (e) {
        console.log(e.message);
      }
      return result;
    };
    renderAdds();
  }, []);

  if (!renderData) {
    return (
      <div>
        <ClipLoader size={20} />
      </div>
    );
  }
  return (
    <>
      <CustumNavbar />
      <Row className="flex">
        <Col
          style={{ padding: "10px" }}
          xs={11}
          sm={11}
          md={11}
          lg={11}
          xl={11}
        >
          <Silders
            FirstImage={AddImage}
            SeacondImage={AddImage}
            ThirdImage={AddImage}
          />
        </Col>
        <Col
          className="flex"
          style={{ padding: "10px" }}
          xs={10}
          sm={10}
          md={6}
          lg={6}
          xl={6}
        >
          <img style={{ width: "100%" }} src={SecAdd} />
        </Col>
        <Col className="fresh-Text-Col" xs={11} sm={11} md={11} lg={11} xl={11}>
          <h2>{user && user.name}</h2>
        </Col>
        {renderData.map((item) => {
          return (
            <>
              <Col
                onClick={() => {
                  navigate(`/addsDetail/${item.id}`);
                }}
                xs={11}
                sm={11}
                md={4}
                xl={3}
                lg={3}
              >
                <Cards
                  Img={item.url}
                  Title={item.title}
                  Text={item.price}
                  Detail={item.detail}
                />
              </Col>
            </>
          );
        })}
      </Row>
      <Footer />
    </>
  );
}
