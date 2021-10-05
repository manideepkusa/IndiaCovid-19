import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Guidelines() {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Container>
          <br />
          <h5 className="mb-3 text-center font-italic font-weight-bold heading">
            Guide Lines
          </h5>
          <p>
            <b>
              <i className="fas fa-angle-right "></i> Wear a mask:
            </b>{" "}
            Wear a well-fitting three-layer mask, especially when you can’t
            physically distance, or if you’re indoors. Clean your hands before
            putting on and taking off a mask.
          </p>
          <p>
            <b>
              <i className="fas fa-angle-right"></i> Keep your distance :
            </b>{" "}
            Stay at least 1 metre away from others, even if they don’t appear to
            be sick, since people can have the virus without having symptoms.
          </p>
          <p>
            <i class="fas fa-angle-right"></i>
            &nbsp;Avoid crowded places, poorly ventilated, indoor locations and
            avoid prolonged contact with others. Spend more time outdoors than
            indoors.
          </p>
          <div className="text-center mb-5 mt-5">
            <Link className="btn btn-info pl-3 pr-3 p-2" to="/guidelines/quiz">
              Quiz
            </Link>
            <br />
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Guidelines;
