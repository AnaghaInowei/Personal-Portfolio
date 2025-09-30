export default function Techstack() {
  return (
    <section className="techstack">
        <h4>Tech Stack</h4>
        <p>Technologies and Tools I use to bring products to life</p>
        <div className="stackcards">
            <div className="frontend">
                <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
                    <p>HTML5</p>
                </div>
                <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
                    <p>Css</p>
                </div>
                <div className="techcard">
                    <img src="./src/assets/tailwind-css-svgrepo-com.svg" alt="Tailwnd Css" width={100}/>
                    <p>Tailwind Css</p>
                </div>
                {/* <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <p>JavaScript</p>
                </div> */}
                <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
                    <p>React</p>
                </div>
                {/* <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
                    <p>HTML5</p>
                </div>
                <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
                    <p>HTML5</p>
                </div>
                <div className="techcard">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
                    <p>HTML5</p>
                </div> */}
            </div>
          
        </div>
    </section>
      );
    }