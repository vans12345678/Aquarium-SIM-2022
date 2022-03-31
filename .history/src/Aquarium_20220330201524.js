import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";
import { ListGroup, Button, Card } from "react-bootstrap";

const Aquarium = () => {
  const [fishList, setFishList] = useState([]);
  const getFish = () => {
    Axios.get("http://localhost:3001/fishGet%22").then((response) => {
      setFishList(response.data);
    });
  };

  useEffect(() => {
    getFish();
  }, []);
  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>

        <br />
        <br />

        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <br />
        <br />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 mt-1">
          <img
            className=""
            src={aquarium}
            width="1200px"
            height="700px"
            alt=""
          />
          {/* <div className="list">
            <ul className="list-group mb-3">
              <li className="list-group-item">
                <img
                  className="listImg"
                  src={swordtail}
                  width="100px"
                  height="50px"
                  alt=""
                />
                Swordtail
                <a href="">
                  <Button variant="info">Click</Button>
                </a>
              </li>
            </ul>
          </div> */}
          <div className="list">
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>
                  <img
                    className="listImg"
                    src={swordtail}
                    width="100px"
                    height="50px"
                    alt=""
                  />
                  YOOOOOOOOOOOOOOO
                  <Button variant="info">Click</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            {/* <ListGroup>
              <ListGroup.Item variant="secondary">
                <div>
                  <img
                    className="listImg"
                    src={swordtail}
                    width="100px"
                    height="50px"
                    alt=""
                  />
                  Swordtail
                </div>

                <a href="">
                  <Button variant="info">Click</Button>
                </a>
              </ListGroup.Item>
              <ListGroup.Item action variant="success">
                Success
              </ListGroup.Item>
              <ListGroup.Item action variant="danger">
                Danger
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
                Warning
                <button>Click</button>
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Info
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                Light
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>

              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
            </ListGroup> */}
          </div>
        </div>

        {/* <Stage
          width={3000}
          height={1500}
          raf={false}
          renderOnComponentChange={true}
          options={{ backgroundAlpha: 0 }}
        >
          {background}
          {/* {console.log(swordtailSprite.props.name)} */}
        {/* <Container position={[background.props.x, background.props.y]}>
            <SwordtailSprite />
            <BasicText />
          </Container>
        </Stage> */}

        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
