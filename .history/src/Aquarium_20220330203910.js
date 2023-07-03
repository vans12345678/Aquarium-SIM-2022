import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail.png";
import commonPleco from "./images/common-pleco.png";
import { ListGroup, Button, Card } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
const Aquarium = () => {
  const [fishList, setFishList] = useState([]);
  const getFish = () => {
    Axios.get("http://localhost:3001/fishGet").then((response) => {
      setFishList(response.data);
    });
  };

  useEffect(() => {
    getFish();
  }, []);

  function fishNameChange(commonName, ScientificName) {
    if (commonName != "N/A") {
      var pageTitleName = commonName;
    } else {
      var pageTitleName = ScientificName;
    }

    return pageTitleName;
  }

  let name = "";

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
            <Card className="list" style={{ width: "40rem" }}>
              <ListGroup variant="flush">
                {fishList.map((item) => {
                  return (
                    <ListGroup.Item key={item.fishID}>
                      <img
                        className="listImg"
                        src={require("./images/" + item.fishImage)}
                        width="100px"
                        height="50px"
                        alt=""
                      />

                      {
                        (name = fishNameChange(
                          item.fishCommonName,
                          item.fishScientificName
                        ))
                      }

                      <Button className="listBtn" variant="success">
                        Add
                      </Button>
                    </ListGroup.Item>
                  );
                })}
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
