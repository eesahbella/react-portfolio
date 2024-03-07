import React from 'react';
import projectsData from "../../data/MyProjectsData.json";
import Carousel from 'react-bootstrap/Carousel';

export default function MyProjects() {
    return (
        <section className="projects-section" id="myProjects">
        <div className="projects-container">
            <h2 className="projects-section-heading">My Recent Projects</h2>
        </div>
        <Carousel>
            {projectsData.map((project, index) => (
            <Carousel.Item key={index}>
                <div className="projects-section-card">
                <div className="projects-section-img">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="projects-section-card-content">
                    <h3 className="projects-section-title">{project.title}</h3>
                    <p className="projects-section-description">
                    <a href={project.deployedLink} target="_blank">Deployed Link</a>
                    </p>
                    <p className="projects-section-description">
                    <a href={project.githubLink} target="_blank">Github Link</a>
                    </p>
                </div>
                </div>
            </Carousel.Item>
            ))}
        </Carousel>
        </section>
    );
}