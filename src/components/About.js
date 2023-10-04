import Link from "next/link";
const About = () => {
  return (
      <section
          id="about"
          data-nav-tooltip="About"
          className="pp-section pp-scrollable section counter"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 m-15px-tb">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="static/img/4carre.png" title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="about-info">
                <div className="title">
                  <h3>About me.</h3>
                </div>
                <div className="about-text">
                  <h3>
                    {`I'm`} a Freelancer Front-end Developer with over 4 years of
                    experience.{" "}
                  </h3>
                  <p>
                    {`I'm`} from Paris. I code and create web
                    elements for amazing people around the world. I like work with
                    new people. New people new Experiences.
                  </p>
                  <div className="row">
                    <div className="col-auto">
                      <div className="media align-items-center">
                        <span className="count">27</span>
                        <div className="media-body">
                          Projects <br />
                          Completed.
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="media align-items-center">
                        <span className="count">19</span>
                        <div className="media-body">
                          Satisfied <br />
                          Clients.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn-bar">
                    <Link href="#contactus">
                      <span className="px-btn px-btn-theme" >Contact Me</span>
                    </Link>
                    <Link href="#work">
                      <span className="px-btn px-btn-theme">Portfolio</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separated" />
          <div className="title">
            <h3>Education &amp; Skills</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                <li>
                  <span>2020-2023</span>
                  <h6>Lead Developer</h6>
                  <p>Master of Science in Computer Engineering</p>
                  <p>ESIEE IT, Cergy France</p>
                </li>
                <li>
                  <span>2023-2023</span>
                  <h6>Business Entrepreneurship International</h6>
                  <p>Université Laval - Faculty of Business Administration</p>
                  <p>(FSA ULaval) Quebec, Canada</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb">
              <div className="skills-box">
                <h3>My skills</h3>
                {/*<p>*/}
                {/*  {`I'm`} a Freelancer Front-end Developer with over 3 years of*/}
                {/*  experience. I code and create web elements for amazing people*/}
                {/*  around the world. I like work with new people. New people new*/}
                {/*  Experiences.*/}
                {/*</p>*/}
                <div className="skill-lt">
                  <h6>Typescript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "82%" }}>
                      <span data-toggle="tooltip" title="92%" />
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6>NextJS</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "82%" }}>
                      <span data-toggle="tooltip" title="92%" />
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6>Java</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "62%" }}>
                      <span data-toggle="tooltip" title="92%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>ReactJS</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "82%" }}>
                      <span data-toggle="tooltip" title="72%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Javascript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "86%" }}>
                      <span data-toggle="tooltip" title="86%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>AngularJs</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "72%" }}>
                      <span data-toggle="tooltip" title="72%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
              </div>
            </div>
          </div>
          {/*<Skills/>*/}
          <div className="row" style={{marginTop:"6.5rem"}}>
            <div className="col-lg-3">
              <div className="skills-box">
                <h3>Design</h3>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/Figma.svg" width={20} height={20} className="mr-2"/>
                  <h6>Figma</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/MaterialUI.svg" width={20} height={20} className="mr-2"/>
                  <h6>Material-ui</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="skills-box">
                <h3>Back-end</h3>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/Node.js.svg" width={20} height={20} className="mr-2"/>
                  <h6>NodeJS</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/Java.svg" width={20} height={20} className="mr-2"/>
                  <h6>Java</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/PHP.svg" width={20} height={20} className="mr-2"/>
                  <h6>Php</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="skills-box">
                <h3>Database</h3>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/MongoDB.svg" width={20} height={20} className="mr-2"/>
                  <h6>MongoDB</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/MySQL.svg" width={20} height={20} className="mr-2"/>
                  <h6>MySQL</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/PostgresSQL.svg" width={20} height={20} className="mr-2"/>
                  <h6>PostgresSQL</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="skills-box">
                <h3>Other</h3>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/Git.svg" width={20} height={20} className="mr-2"/>
                  <h6>Git & Github</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/Docker.svg" width={20} height={20} className="mr-2"/>
                  <h6>Docker</h6>
                </div>
                <div className="skill-lt d-flex flex-row">
                  <img src="static/icon/WordPress.svg" width={20} height={20} className="mr-2"/>
                  <h6>Wordpress</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="separated" />
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/TAKOMA-LOGO.jpg" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Full-Stack Developer</h6>
                    <label>Takoma | Remote | Jul 2023 - Aug 2023</label>
                    <div className="rb-time">Freelancer</div>
                    <p>
                      Integration of Google Tag Manager to optimize an online catalog.
                      Configuration of tracking tags on all relevant pages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/wister-carre.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Full-Stack Developer</h6>
                    <label>Wister | Remote | Dec 2020 - Jul 2023</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      Maintenance and improvement of the Zistat statistical application:
                      Identification and resolution of bugs, Optimization of performance and speed,
                      Enhancement of statistical accuracy,
                      Addition of new features to meet user needs,
                      Adaptation of the tool for deeper analysis.
                      <br/>
                      <br/>
                      Security audit of the SCV-2 CRM application:
                      Assessment of risks associated with the application, Review of existing security policies,
                      Research and implementation of proven security solutions,
                      Collaboration with the technical team to validate and integrate security improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/myaichat.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Co-Fondateur (CTO)</h6>
                    <label>MyAiChat | Remote | Mar 2023 - Present</label>
                    <div className="rb-time">Personal Project</div>
                    <p>
                      {
                          "As the Co-founder of MYAICHAT, I play a pivotal role within the technical team " +
                          "responsible for the development of our SaaS (Software-as-a-Service). In addition to defining the " +
                          "overall company strategy and overseeing its execution, I am directly involved in the development process " +
                          "of our SaaS platform. I work closely with our technical team " +
                          "to design, develop, and enhance the features of our SaaS solution, " +
                          "ensuring it meets the needs and expectations of our clients."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/a.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Front-End Developer (Associate)</h6>
                    <label>Letsgo | Remote | Jan 2022 - Present</label>
                    <div className="rb-time">Personal Project</div>
                    <p>
                      {
                          "Development and maintenance of a ticket booking website (front-end and back-end), " +
                          "Project management and adherence to deadlines, Optimization of site performance and security, " +
                          "Thorough testing, debugging, and resolution of technical issues, " +
                          "Interdisciplinary collaboration with marketing and design teams, " +
                          "Oversight and contribution to the technological strategy."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default About;
