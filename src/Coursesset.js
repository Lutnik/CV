import React, { useContext } from "react";
import LangContext from "./LangContext";
import PropTypes from "prop-types";
import { Accordion, Segment } from "semantic-ui-react";
import { segmentStyle, linkStyle } from "./styles.js";

export default function Coursesset({ courses }) {
  const language = useContext(LangContext);
  const panels = courses.map(course => ({
    key: course.name,
    title: course.name,
    content: {
      content: (
        <div>
          <p> {course.description} </p>
          <a href={course.link} style={linkStyle}>
            Więcej informacji o kursie
          </a>
          <br />
          {course.demo && (
            <a href={course.demo} style={linkStyle}>
              Demo
            </a>
          )}
        </div>
      )
    }
  }));

  return (
    <>
      <h2> {language === "PL" ? "Kursy:" : "Courses:"} </h2>
      <Segment style={segmentStyle}>
        <Accordion styled panels={panels} />
      </Segment>
    </>
  );
}

Coursesset.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      demo: PropTypes.string
    })
  )
};
