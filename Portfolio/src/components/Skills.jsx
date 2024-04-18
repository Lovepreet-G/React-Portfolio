import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/skills');
      console.log(response.data);
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  return (
    <section id="my-skills">
      <h2 className="heading">My Skills</h2>
      <div className="flex">
        {skills.map((skill, index) => (
          <SkillCard key={index} image={`src/assets/Resource/${skill.icon}`} title={skill.name} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ image, title }) => {
  return (
    <div className="card1">
      <img src={image} alt={`${title} Logo`} />
      {title}
    </div>
  );
};

export default Skills;
