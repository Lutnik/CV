import React from "react";
import PropTypes from "prop-types";
import { Segment, Table } from "semantic-ui-react";
import { segmentStyle, linkStyle } from "./styles";

export default function Projects({ showcase }) {
  return (
    <>
      <h2> Projekty: </h2>
      <Segment style={segmentStyle}>
        <Table basic="very" unstackable compact>
          <Table.Body>
            {showcase.map((el, i) => (
              <Table.Row key={i}>
                <Table.Cell> {el.description} </Table.Cell>
                {el.links && (
                  <Table.Cell>
                    {Object.keys(el.links)
                      .filter(
                        link =>
                          el.links[link] && !Number.isInteger(el.links[link])
                      )
                      .map(linkKey => (
                        <a
                          href={el.links[linkKey]}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkStyle}
                          key={linkKey}
                        >
                          {linkKey}
                        </a>
                      ))}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </>
  );
}

Projects.propTypes = {
  showcase: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      links: PropTypes.object
    })
  ).isRequired
};
