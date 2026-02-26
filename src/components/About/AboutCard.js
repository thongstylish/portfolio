import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tran Thanh Thong </span>
            from <span className="purple"> Ho Chi Minh city, VietNam.</span>
            <br />
               I build and operate infrastructure.
            <br />
              Over the past few years, I’ve worked on designing scalable systems, automating deployments, and hardening production environments across cloud and on-premise setups.
            <br />
              I enjoy solving operational challenges and continuously improving reliability, security, and deployment workflows.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
