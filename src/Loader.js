import React from "react";
import PropTypes from "prop-types";
import { Segment, Placeholder } from "semantic-ui-react";
import { segmentStyle } from "./styles.js";

export default function Loader({ size }) {
  const content = [];
  for (let i = 0; i < size; i++) {
    content.push(
      <Placeholder.Paragraph key={i}>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    );
  }

  return (
    <Segment style={segmentStyle}>
      <Placeholder fluid>{content}</Placeholder>
    </Segment>
  );
}

Loader.propTypes = {
  size: PropTypes.number.isRequired
};

Loader.defaultProps = {
  size: 2
};
