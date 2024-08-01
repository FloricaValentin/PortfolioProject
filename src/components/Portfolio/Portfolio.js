import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import ProjectDetail from '../ProjectDetails/ProjectDetails';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FaShoppingCart, FaAppleAlt, FaCalculator, FaFilm } from 'react-icons/fa';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';
import image8 from '../../assets/images/image8.png';

const projects = [
  {
    id: 1,
    title: 'Calorie Tracker App',
    description: 'A calorie tracker app built using the MERN stack (MongoDB, Express, React, Node.js). The user can add their body measurements (Height and weight) with the daily activity and the app will generate necessary calories based on objectives. They can also change their username and password and add their specific food.',
    icon: <FaCalculator size={50} color="#ff00ff" />,
    githubLink: 'https://github.com/FloricaValentin/Calorie-Tracker-App',
    projectLink: 'https://calorie-tracker-app-eta.vercel.app/',
    images: [image1, image2]
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'An e-commerce application built with Firebase and React Redux. Features user authentication, product listings, shopping cart functionality, and sending order details.',
    icon: <FaShoppingCart size={50} color="#ff00ff" />,
    githubLink: 'https://github.com/FloricaValentin/e-commerce-app',
    projectLink: 'https://e-commerce-app-one-sepia.vercel.app/',
    images: [image3, image4]
  },
  {
    id: 3,
    title: 'Recipe App',
    description: 'A recipe app built using GraphQL and React. Allows users to search, add, edit, or delete recipes.',
    icon: <FaAppleAlt size={50} color="#ff00ff" />,
    githubLink: 'https://github.com/FloricaValentin/Recipe-App',
    images: [image5, image6]
  },
  {
    id: 4,
    title: 'Movies App',
    description: 'A movies app built with PostgreSQL, Express, and React. Allows users to search for movies and view detailed information.',
    icon: <FaFilm size={50} color="#ff00ff" />,
    githubLink: 'https://github.com/FloricaValentin/Movie-App',
    images: [image7, image8]
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', '', 'P', 'r', 'o ', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <h2>Showcasing my work</h2>
      </div>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-icon">
              {project.icon}
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <button onClick={() => handleViewProject(project)} className="project-link-button">View Project</button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default Portfolio;
