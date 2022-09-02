import { Carousel } from "react-bootstrap";

export default function Silders(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={props.FirstImage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={props.SeacondImage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.ThirdImage}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
