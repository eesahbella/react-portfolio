import React from "react";

import { Link } from "react-scroll";
function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-link-container">
                <div className="footer-items">
                    <ul>
                        <li>
                            <Link to="heroSection" className="text-footer">Home</Link>
                        </li>
                        <li>
                            <Link to="mySkills" className="text-footer">My Skills</Link>
                        </li>
                        <li>
                            <Link to="myProjects" className="text-footer">My Projects</Link>
                        </li>
                        <li>
                            <Link to="Contact" className="text-footer">Contact Me</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-icon">
                    <ul>
                        <li>
                            <a href="https://github.com/eesahbella" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="white" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.042-3.338.724-4.042-1.553-4.042-1.553-.546-1.385-1.333-1.753-1.333-1.753-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.233 1.838 1.233 1.07 1.833 2.81 1.303 3.496.998.108-.776.417-1.303.76-1.603-2.665-.303-5.466-1.332-5.466-5.93 0-1.312.465-2.38 1.233-3.22-.135-.303-.54-1.524.105-3.176 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.398 3-.405 1.02.007 2.04.138 3 .405 2.28-1.552 3.29-1.23 3.29-1.23.645 1.652.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.365.81 1.096.81 2.21 0 1.594-.015 2.877-.015 3.273 0 .32.21.695.825.576C20.565 21.792 24 17.3 24 12c0-6.63-5.373-12-12-12z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/isabel-toledano/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="white" d="M21.79 0H2.21C1.005 0 0 1.005 0 2.21v19.58C0 22.994 1.005 24 2.21 24h19.58C22.994 24 24 22.994 24 21.79V2.21C24 1.005 22.994 0 21.79 0zM7.62 20.705H4.285V9.747h3.335v10.958H7.62zM5.95 8.25h-.024c-1.1 0-1.796-.758-1.796-1.706 0-.963.697-1.707 1.773-1.707s1.797.744 1.822 1.707c0 1-.696 1.706-1.775 1.706zm15.575 12.455h-3.33v-5.773c0-1.39-.498-2.338-1.738-2.338-1.196 0-1.907.794-2.215 1.562-.114.276-.142.663-.142 1.048v6.5H10.5s.044-8.955 0-9.884h3.33v1.403c.443-.67 1.23-1.627 3.005-1.627 2.198 0 3.85 1.43 3.85 4.503v6.607z"/></svg>
                            </a>
                        </li>
                        <li>
                        <a href="mailto:toledanoisabeldev@gmail.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="white" d="M21.79 0H2.21C1.005 0 0 1.005 0 2.21v19.58C0 22.994 1.005 24 2.21 24h19.58C22.994 24 24 22.994 24 21.79V2.21C24 1.005 22.994 0 21.79 0zM20.5 4l-8.5 7.5-8.5-7.5h17zm-17 16V6.543L12 13.46l8.5-7.917V20H3.5z"/></svg>
                        </a>

                        </li>
                    </ul>
                </div>
            </div>
            <hr className="divider" />
                <div className="footer-content-container">
                    <p className="footer-content">Made with 💖 by Isabel</p>
                </div>
        </footer>
    );
}

export default Footer;