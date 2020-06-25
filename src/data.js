const getSkills = cmsUrl => {
  return fetch(`${cmsUrl}/skills`).then(resp => {
    if (!resp.ok) {
      console.error("Error fetching projects data");
      return null;
    }
    return resp.json();
  });
};

const getProjects = cmsUrl => {
  return fetch(`${cmsUrl}/projects`).then(resp => {
    if (!resp.ok) {
      console.error("Error fetching projects data");
      return null;
    }
    return resp.json();
  });
};

const getTimeline = cmsUrl => {
  return fetch(`${cmsUrl}/timelines`).then(resp => {
    if (!resp.ok) {
      console.error("Error fetching projects data");
      return null;
    }
    return resp.json();
  });
};

const getPersonal = async cmsUrl => {
  try {
    const [personal, socialLinks] = await Promise.all([
      fetch(`${cmsUrl}/personal`).then(resp => {
        if (!resp.ok) {
          throw new Error("Invalid network response");
        }
        return resp.json();
      }),
      fetch(`${cmsUrl}/social`).then(resp => {
        if (!resp.ok) {
          throw new Error("Invalid network response");
        }
        return resp.json();
      })
    ]);
    return { ...personal, social: { ...socialLinks } };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCourses = cmsUrl => {
  return fetch(`${cmsUrl}/courses`).then(resp => {
    if (!resp.ok) {
      console.error("Error fetching courses data");
      return null;
    }
    return resp.json();
  });
};

export { getSkills, getTimeline, getPersonal, getCourses, getProjects };
