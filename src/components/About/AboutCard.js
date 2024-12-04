import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kishor M M </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I'm Currently Doing Data Science Tranining in Cranes Versity .
            <br />
            I am completed my MCA at Christ Academy Institute for Advance Studies with 7.4 CGPA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Follow your heart,whatever it takes. Attitude is the crown you wear, Freedom is the gift you give to yourself"{" "}
          </p>
          <footer className="blockquote-footer">Kishor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
