import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="nav-bar">
            <Container fluid>
                <Navbar.Brand className="text-light me-auto" href="#home">ITMC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-light me-3" href="#heroSection">Home</Nav.Link>
                        <Nav.Link className="text-light me-3" href="#mySkills">My Skills</Nav.Link>
                        <Nav.Link className="text-light me-3" href="#myProjects">My Projects</Nav.Link>
                        <Nav.Link className="text-light me-3" href="#Contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

