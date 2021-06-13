import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./about.css";
function About() {
  return (
    <div className="accor">
      <h1 style={{ color: "white" }}>Frequently Asked Questions</h1>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Is it free to use Movies Anywhere?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              It is absolutely free to sign up and use all the great features of
              Movies Anywhere – you only pay for the movies you want to add to
              your collection via purchases made through your connected digital
              retailers. No subscription fee, no commitments, no extra charges –
              ever.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Can I purchase movies through Movies Anywhere?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              With Movies Anywhere, you have the option to purchase your
              favorite movies through any of your connected digital retailer
              accounts. Browse new releases and explore thousands of all-time
              favorites, plus shop Daily Deals to get great prices on great
              movies every day. Once you find the movie you want, we’ll send you
              to the digital retailer you choose to purchase from, and once your
              transaction is complete through the retailer, we’ll add that movie
              to your digital collection.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              How does Movies Anywhere bring my movies together?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Once you connect your digital retailers to Movies Anywhere, we
              bring your eligible movies from all of your connected accounts
              into one synced collection. All you have to do is connect your
              digital retailer accounts to your Movies Anywhere account and we
              do the rest. We also make sure all of your eligible movies are
              available to watch on all of your connected accounts.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Can I redeem a digital code on Movies Anywhere?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              If you have a digital code from a Blu-ray or DVD combo pack, all
              you have to do to add that movie to your digital collection is
              visit moviesanywhere.com/redeem or visit the Redeem section of the
              app to enter your code. Your movie will then be added to your
              collection within minutes. If you have already connected your
              digital retailers, your movie will also appear in your connected
              accounts.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default About;
