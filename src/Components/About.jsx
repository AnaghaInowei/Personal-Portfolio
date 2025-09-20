export default function About() {
  return (
    <section className="about">
      <h4 className="me">About Me</h4>
      <div className="content">
        <div className="text">
            <h3>Front-End Developer & UI Enthusiast</h3>
            <p>
              I'm Inowei Anagha, a passionate Front-End Web Developer focused on creating intuitive and dynamic    user experiences. With a keen eye for detail and a love for clean code, I transform ideas into beautiful, functional websites.
            </p>
            <p>
              My journey in web development began with a curiosity about how websites work, which evolved into a deep passion for creating seamless user interfaces and experiences. I specialize in modern JavaScript frameworks like React, and I'm constantly exploring new technologies to enhance my skill set.
            </p>
            
            <button className="connect">Lets Connect</button>
        </div>
        <div className="skillcard">
          <h4>Professional Skills</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li> 
            <li>React</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}