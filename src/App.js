import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
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
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState();
  const [skills, setSkills] = useState();
  const [personal, setPersonal] = useState();
  const [courses, setCourses] = useState();
  const [projects, setProjects] = useState();

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

  return (
    <>
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
    </>
  );
}
