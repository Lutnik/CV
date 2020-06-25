import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";
import { segmentStyle } from "./styles";

export default function Item({
  start,
  end,
  name,
  desc_short,
  desc_long,
  image
}) {
  const [style, setStyle] = useState(segmentStyle);
  const [content, setContent] = useState(
    <Card.Description>{desc_short}</Card.Description>
  );

  function handleHover(type) {
    if (type === "enter") {
      setStyle({
        ...style,
        boxShadow: "2px 1px 2px 0px rgba(0,0,0,0.5)",
        border: "1px solid lightgrey"
      });
      setContent(
        <Card.Description>
          <p>{desc_short}</p>
          <p>{desc_long}</p>
        </Card.Description>
      );
    } else {
      setStyle({
        ...style,
        boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.5)",
        border: "1px solid GhostWhite"
      });
      setContent(<Card.Description>{desc_short}</Card.Description>);
    }
  }

  return (
    <Card
      onMouseEnter={() => handleHover("enter")}
      onMouseLeave={() => handleHover("leave")}
      style={style}
      fluid
    >
      <Card.Content>
        <Card.Header>
          <Image src={image} avatar />
          {name}
        </Card.Header>
        <Card.Meta>
          {start} - {end || "teraz"}
        </Card.Meta>
        <Card.Description> {content}</Card.Description>
      </Card.Content>
    </Card>
  );
}

Item.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  desc_short: PropTypes.string.isRequired,
  desc_long: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
