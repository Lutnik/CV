import React, { useState, useEffect } from "react";
import { Container, Grid, Flag, Message, Segment } from "semantic-ui-react";
import LangContext from "./LangContext";
import Loader from "./Loader";
import Intro from "./Intro";
import Skillset from "./Skillset";
import Coursesset from "./Coursesset";
import Projects from "./Projects";
import Historyset from "./Historyset";
import Footer from "./Footer";
import {
  getSkills,
  getPersonal,
  getCourses,
  getProjects,
  getTimeline
} from "./data.js";
import { messageStyle, segmentStyle } from "./styles";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState();
  const [skills, setSkills] = useState();
  const [personal, setPersonal] = useState();
  const [courses, setCourses] = useState();
  const [projects, setProjects] = useState();
  const [language, setLanguage] = useState("PL");

  useEffect(() => {
    async function fetchData() {
      const cmsUrl = process.env.CMS_URL;
      const [
        timelineData,
        skillsData,
        personalData,
        coursesData,
        projectsData
      ] = await Promise.all([
        getTimeline(cmsUrl),
        getSkills(cmsUrl),
        getPersonal(cmsUrl),
        getCourses(cmsUrl),
        getProjects(cmsUrl)
      ]);
      setItems(timelineData);
      setSkills(skillsData);
      setPersonal(personalData);
      setCourses(coursesData);
      setProjects(projectsData);
    }
    fetchData();
  }, []);

  function handleCountry(lang) {
    if (lang === "PL") {
      setLanguage("PL");
    } else {
      setLanguage("EN");
    }
  }

  return (
    <LangContext.Provider value={language}>
      <Segment
        style={{
          ...segmentStyle,
          position: "absolute",
          top: 0,
          right: "2em",
          zIndex: 2,
          padding: "0.5em"
        }}
      >
        <Flag name="poland" onClick={() => handleCountry("PL")} />{" "}
        <Flag name="united kingdom" onClick={() => handleCountry("EN")} />
      </Segment>
      {personal ? null : (
        <Message info style={messageStyle}>
          <p> Proszę poczekaj na pobranie danych z API </p>
          <p> Please wait for API data </p>
        </Message>
      )}
      <Container text>
        {personal ? <Intro data={personal} /> : <Loader size={2} />}
        <Grid columns={2} stackable={true}>
          <Grid.Column>
            {skills ? <Skillset skills={skills} /> : <Loader size={6} />}
            {courses ? <Coursesset courses={courses} /> : <Loader size={4} />}
          </Grid.Column>
          <Grid.Column>
            {projects ? <Projects showcase={projects} /> : <Loader size={4} />}
            {items ? <Historyset items={items} /> : <Loader size={6} />}
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    </LangContext.Provider>
  );
}
