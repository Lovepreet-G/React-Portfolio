import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/projects');
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <section id="portfolio">
      <h2 className="heading">Portfolio</h2>
      <div className="flex">
        {projects.map((project, index) => (
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
