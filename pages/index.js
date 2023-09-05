import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import Link from "next/link";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
      <Layout>
        <section
            id="home"
            data-nav-tooltip="Home"
            className="pp-section pp-scrollable"
        >
          <div className="home-banner">
            <div className="container">
              <div className="row full-screen align-items-center">
                <div className="col-lg-6">
                  <div className="type-box">
                    <h6>Hello, I am</h6>
                    <h1 className="font-alt">Voldi Zola</h1>
                    <p className="lead">
                      I Am Passionate <TypingAnimation />
                    </p>
                    <p className="desc">
                      As a freelance Frontend Developer, I specialize in crafting web solutions for businesses of all sizes.
                      With a strong engineering background and expertise in React, Javascript, and other cutting-edge technologies,
                      {"I've"} honed my skills across platforms like ReactJs, NextJs, Vue JS, and TypeScript.
                      {"I've"} collaborated with diverse enterprises, understanding the nuances of effective communication and project management.
                      {"I'm"} committed to delivering both aesthetically pleasing and technically robust solutions tailored to your needs.
                    </p>
                    <div className="btn-bar">
                        <Link href="Developper_Front_End.pdf">
                            <a className="px-btn px-btn-theme"  target="_blank">
                                Download CV
                            </a>
                        </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hb-img">
                    <img src="static/img/zvtran.png"  title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Layout>
  );
};
export default Index;
