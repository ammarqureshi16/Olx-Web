import React, { useState } from "react";
import { getMyAdds } from "../../Config/firebase";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Card/card";
import Navbars from "../Navb-Bar/navbar";

export default function MyAdds() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const renderMyAdds = async () => {
      try {
        var result = await getMyAdds();
        setData(result);
      } catch (e) {
        alert(e.message);
      }
      return result;
    };
    renderMyAdds();
  }, []);
  return (
    <>
      <Navbars />
      <Container>
        <Row>
          <Col
            className="flex"
            style={{ height: "80px" }}
            xs={12}
            sm={12}
            md={11}
            lg={11}
            xl={11}
          >
            <h4>MY ADDS</h4>
          </Col>
          {data.map((item) => {
            return (
              <>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Card
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
      </Container>
    </>
  );
}
