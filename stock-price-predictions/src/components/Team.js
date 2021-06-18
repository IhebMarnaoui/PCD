import React from "react";
import { CardDeck, Card} from "react-bootstrap";
import Nesrine from "../Images/Nesrine.jpg";
import Iheb from "../Images/Iheb.jpg";
import Wael from "../Images/Wael.jpg";
import { SocialIcon } from "react-social-icons";

function Team() {
  return (
    <div style={{ margin: "70px", marginTop: "30px", marginBottom: "0px" }}>
      <center>
        <h1
          style={{
            fontWeight: "bold",
            color: "#044A67",
            marginBottom: "30px",
            fontSize: "50px",
          }}
        >
          {" "}
          Our Team{" "}
        </h1>
      </center>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Nesrine} />
          <Card.Body>
            <center>
              <Card.Title>Jouini Nesrine</Card.Title>

              <Card.Text>Software Engineer</Card.Text>
              <SocialIcon url="https://www.facebook.com/nesrine098" target ="_blank"/>
              <span style={{ marginLeft: "30px" }}></span>
              <SocialIcon url="https://www.linkedin.com/in/nesrine-jouini/" target ="_blank"/>
            </center>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Iheb} />
          <Card.Body>
            <center>
              <Card.Title>Marnaoui Iheb</Card.Title>
              <Card.Text>Software Engineer And Financial Expert</Card.Text>
              <SocialIcon url="https://www.facebook.com/ihebmarr/" target ="_blank"/>
              <span style={{ marginLeft: "30px" }}></span>
              <SocialIcon url="https://www.linkedin.com/in/ihebmarnaoui/" target ="_blank"/>
            </center>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Wael} />
          <Card.Body>
            <center>
              <Card.Title>Khemakhem Wael</Card.Title>
              <Card.Text>Software Engineer</Card.Text>
              <SocialIcon url="https://www.facebook.com/waelkh544" target ="_blank"/>
              <span style={{ marginLeft: "30px" }}></span>
              <SocialIcon url="https://www.linkedin.com/in/wael-khemakhem-8973a8164/" target ="_blank"/>
            </center>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Team;
