import React from "react";
import { Container, Nav } from "react-bootstrap";

const Guidelines = () => {
  return (
    <>
      <div>
        <Container>
          <p>
            <b>Wear a mask:</b> Wear a well-fitting three-layer mask, especially
            when you can’t physically distance, or if you’re indoors. Clean your
            hands before putting on and taking off a mask.
          </p>
          <p>
            <b>Keep your distance:</b> Stay at least 1 metre away from others,
            even if they don’t appear to be sick, since people can have the
            virus without having symptoms.
          </p>
          <p>
            Avoid crowded places, poorly ventilated, indoor locations and avoid
            prolonged contact with others. Spend more time outdoors than
            indoors.
          </p>
          <Nav.Link to="/quiz">
            <button className="btn btn-info ">Quiz</button>
          </Nav.Link>
        </Container>
      </div>
    </>
  );
};

export default Guidelines;
