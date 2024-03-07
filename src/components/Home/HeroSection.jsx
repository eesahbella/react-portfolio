export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I'm Isabel</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-colour">Front-End</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">Welcome to my portfolio!
                        <br /> Step into my world of web development ⋆ ˚｡⋆୨♡୧⋆ ˚｡⋆
                    </p>
                </div>
                <a href="/itmc-cv.pdf" download="ITMC_CV.pdf">
                <button className="btn btn-primary">Download my CV!</button>
                </a>
            </div>
            <div className="hero-section-image">
                <img src="./img/avatar.png" alt="avatar" />
            </div>
        </section>
    );
}