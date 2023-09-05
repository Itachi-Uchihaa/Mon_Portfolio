import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import auxfingastronomes from "../../public/static/img/auxfingastronomes.png";
import admin from "../../public/static/img/admin.png";
import dashboard from "../../public/static/img/dashboard.jpeg";
import devzup from "../../public/static/img/devzup.png";
import flyrocks from "../../public/static/img/flyrocks.png";
import furnstore from "../../public/static/img/furnstore.png";
import myaichatpage from "../../public/static/img/myaichatpage.png";
import pecolift from "../../public/static/img/pecolift.png";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("dashboard")}`}
              onClick={handleFilterKeyChange("dashboard")}
              data-filter=".dashboard"
            >
              Dashboard
            </li>
            <li
              className={`c-pointer ${activeBtn("ecommerce")}`}
              onClick={handleFilterKeyChange("ecommerce")}
              data-filter=".ecommerce"
            >
              E-commerce
            </li>
            <li
              className={`c-pointer ${activeBtn("website")}`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Website
            </li>
            <li
              className={`c-pointer ${activeBtn("blog")}`}
              onClick={handleFilterKeyChange("blog")}
              data-filter=".blog"
            >
              Blog
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item website">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Aux Fins Gastronomes</h5>
                <Link href="https://auxfinsgastronomes.com">
                  <a target="_blank" rel="noreferrer">
                    https://auxfinsgastronomes.com
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/auxfingastronomes.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/auxfingastronomes.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item dashboard">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Admin Dashboard</h5>
                <span>MyAiChat</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/admin.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/admin.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item dashboard">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Users Dashboard</h5>
                <Link href="https://app.myaichat.io">
                  <a target="_blank" rel="noreferrer">
                    https://app.myaichat.io
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/dashboard.jpeg" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/dashboard.jpeg" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item website">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Devzup</h5>
                <Link href="https://devzup.com">
                  <a target="_blank" rel="noreferrer">
                    https://devzup.com
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/devzup.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/devzup.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item website">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">FlyRocks</h5>
                <Link href="https://flyrocks.fr">
                  <a target="_blank" rel="noreferrer">
                    https://flyrocks.fr
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/flyrocks.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/flyrocks.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item blog">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Fursnstore</h5>
                  <span>
                    Blog
                  </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/furnstore.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/furnstore.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item website">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">MyAiChat</h5>
                <Link href="https://myaichat.io">
                  <a target="_blank" rel="noreferrer">
                    https://myaichat.io
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/myaichatpage.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/myaichatpage.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product website">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Pecolift</h5>
                <Link href="https://www.pecolift.com">
                  <a target="_blank" rel="noreferrer">
                    https://www.pecolift.com
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/pecolift.png" title="" alt="" />
                <div className="portfolio-icon">
                  <Link href="static/img/pecolift.png" className="gallery-link">
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item ecommerce">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Roni Global</h5>
                <Link href="https://www.roni-global.com">
                  <a target="_blank" rel="noreferrer">
                    https://www.roni-global.com
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="/static/img/roniglobal.png" title="" alt=""/>
                <div className="portfolio-icon">
                  <Link href="/static/img/roniglobal.png" className="gallery-link" >
                    <a>
                      <span className="ti-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
