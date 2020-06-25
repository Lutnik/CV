import React from "react";
import PropTypes from "prop-types";
import { Grid, Image, Segment, Table } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import { segmentStyle } from "./styles";
import fb from "./logo/fb.png";
import lin from "./logo/linkedin.png";
import git from "./logo/github.png";
import cp from "./logo/codepen.png";

export default function Intro({ data }) {
  return (
    <Segment
      style={{
        ...segmentStyle,
        marginBottom: "2em"
      }}
      stackable="true"
    >
      <Grid columns={2}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}
          >
            <Grid.Row>
              <h1>
                {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
              </h1>
            </Grid.Row>
            <Grid.Row>
              <h3>
                Cel zawodowy: <br /> {data.careerGoal}{" "}
              </h3>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Table
                basic="very"
                style={{ margin: "0 auto 1em auto" }}
                collapsing
                unstackable
                compact
              >
                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <FontAwesomeIcon icon={faHome} />
                    </Table.Cell>
                    <Table.Cell>
                      {data.address} <br /> {data.address2}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </Table.Cell>
                    <Table.Cell>{data.phone}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
            <Grid.Row
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <a
                href={data.social.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={lin} size="mini" circular alt="Linkedin" />
              </a>
              <a
                href={data.social.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={fb} size="mini" circular alt="Facebook" />
              </a>
              <a
                href={data.social.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={git} size="mini" circular alt="Github" />
              </a>
              <a
                href={data.social.codepen}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={cp} size="mini" circular alt="Codepen" />
              </a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

Intro.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string.isRequired,
    address2: PropTypes.string,
    careerGoal: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    social: PropTypes.shape({
      codepen: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      facebook: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
