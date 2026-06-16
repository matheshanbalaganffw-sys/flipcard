
import React, { useState } from "react";
// import "./App.css";

function App() {

  const [page, setPage] = useState("home");

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">

        <h1 className="logo">Mathesh</h1>

        <ul className="menu">
          <li onClick={() => setPage("home")}>Home</li>
          <li onClick={() => setPage("about")}>About</li>
          <li onClick={() => setPage("skills")}>Skills</li>
          <li onClick={() => setPage("projects")}>Projects</li>
          <li onClick={() => setPage("contact")}>Contact</li>
        </ul>

      </nav>

      {/* Home */}
      {page === "home" && (
        <section className="hero">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="profile"
          />

          <h2>
            Hi, I'm <span>Mathesh</span>
          </h2>

          <p>
            Frontend Developer | React Developer
          </p>

          <button>Hire Me</button>

        </section>
      )}

      {/* About */}
      {page === "about" && (
        <section className="section">

          <h1>About Me</h1>

          <div className="about-box">

            <div className="about-text">

              <p>
                Hello! I'm Mathesh, a passionate frontend developer.
              </p>

              <p>
                I love creating modern and responsive websites using React JS.
              </p>

              <button>Download CV</button>

            </div>

            <div className="about-image">

              <img
                src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
                alt=""
              />

            </div>

          </div>

        </section>
      )}

      {/* Skills */}
      {page === "skills" && (
        <section className="section">

          <h1>Skills</h1>

          <div className="skills">

            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
              />
              <h2>HTML</h2>
            </div>

            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />
              <h2>CSS</h2>
            </div>

            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt=""
              />
              <h2>JavaScript</h2>
            </div>

            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
                alt=""
              />
              <h2>React JS</h2>
            </div>

          </div>

        </section>
      )}

      {/* Projects */}
      {page === "projects" && (
        <section className="section">

          <h1>Projects</h1>

          <div className="project-container">

            {/* Project 1 */}
            <div className="project-card">

              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                alt=""
              />

              <h2>Burger Order App</h2>

              <p>
                Food ordering application using React JS.
              </p>

              <button>View Project</button>

            </div>

            {/* Project 2 */}
            <div className="project-card">

              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt=""
              />

              <h2>Coffee Shop Website</h2>

              <p>
                Modern coffee shop landing page design.
              </p>

              <button>View Project</button>

            </div>

          </div>

        </section>
      )}

      {/* Contact */}
      {page === "contact" && (
        <section className="section">

          <h1>Contact</h1>

          <div className="contact-box">

            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea placeholder="Message"></textarea>

            <button>Send Message</button>

          </div>

        </section>
      )}

    </div>
  );
}

export default App;