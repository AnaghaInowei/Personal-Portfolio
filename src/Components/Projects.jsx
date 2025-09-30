import RentDirect from "../assets/RentDirect.png";

export default function Projects() {
  return (
    <section className="projects">
        <h4 className="me">
          Projects
        </h4>
        <p>
          Here are some of my recent works. Each project is uniquely designed and developed to solve specific problems.
        </p>
        <div className="cards">
          <div className="card">
            <img src={RentDirect} alt="Rent Direct Landing Page" className="project-image" />
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <h3>Rent Direct</h3>
            <p>A project completed during the Techyjaunt internship program</p>
            <a href="#">View Project</a>
          </div>
          <div className="card">
            <img src={RentDirect} alt="Rent Direct Landing Page" className="project-image" />
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <h3>Rent Direct</h3>
            <p>A project completed during the Techyjaunt internship program</p>
            <a href="#">View Project</a>
          </div>
          <div className="card">
            <img src={RentDirect} alt="Rent Direct Landing Page" className="project-image" />
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <h3>Rent Direct</h3>
            <p>A project completed during the Techyjaunt internship program</p>
            <a href="#">View Project</a>
          </div>
        </div>
    </section>
  );
}