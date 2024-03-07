import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="nav-bar">
            <Container fluid>
                <Navbar.Brand className="text-light me-auto" as={Link} to="/">ITMC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-light me-3" as={Link} to="/hero">Home</Nav.Link>
                        <Nav.Link className="text-light me-3" as={Link} to="/skills">My Skills</Nav.Link>
                        <Nav.Link className="text-light me-3" as={Link} to="/projects">My Projects</Nav.Link>
                        <Nav.Link className="text-light me-3" as={Link} to="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

