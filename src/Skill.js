import React from "react";
import PropTypes from "prop-types";
import { Label, List, Popup } from "semantic-ui-react";
import { popupStyle, labelStyle, linkStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ title, description, links = " ", color }) => (
  <Popup
    trigger={
      <Label
        as="a"
        size="huge"
        color={color}
        content={title}
        style={labelStyle}
      />
    }
    flowing
    hoverable
    style={popupStyle}
    size="large"
    position="top left"
    offset="0, 10px"
  >
    <List>
      {description
        .replace(/\\,/g, "!#!")
        .split(",")
        .map(el => (
          <List.Item key={el}>
            <List.Content>
              <FontAwesomeIcon icon={faAngleRight} />{" "}
              {el.replace(/!#!/g, ",").trim()}
            </List.Content>
          </List.Item>
        ))}
    </List>
    {links &&
      links.split(",").map((link, i) => (
        <a
          href={link}
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          {link.length > 40 ? link.substring(0, 40) + "..." : link.trim()}
        </a>
      ))}
  </Popup>
);

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.string,
  color: PropTypes.string
};

Skill.defaultProps = {
  links: "",
  color: "grey"
};
