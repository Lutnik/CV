import React, { useContext } from "react";
import LangContext from "./LangContext";
import PropTypes from "prop-types";
import Skill from "./Skill";
import { Segment } from "semantic-ui-react";
import { segmentStyle } from "./styles.js";

export default function Skillset({ skills }) {
  const language = useContext(LangContext);

  function getCategories(s) {
    return Array.from(new Set(s.map(skill => skill.category)));
  }
  function colorCategory(cat) {
    const colors = [
      "blue",
      "red",
      "green",
      "brown",
      "orange",
      "yellow",
      "olive",
      "teal",
      "violet",
      "pink",
      "grey",
      "black"
    ];
    return colors[cat % 12];
  }

  return (
    <>
      <h2> {language === "PL" ? "Umiejętności:" : "Skills:"} </h2>
      {getCategories(skills).map((category, catIndex) => (
        <Segment style={segmentStyle} key={category}>
          {skills
            .filter(skill => skill.category === category)
            .map(skill => (
              <Skill
                title={skill.title}
                description={skill.description}
                links={skill.links || null}
                category={skill.category}
                key={skill.title}
                color={colorCategory(catIndex)}
              />
            ))}
        </Segment>
      ))}
    </>
  );
}

Skillset.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      links: PropTypes.string,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};
