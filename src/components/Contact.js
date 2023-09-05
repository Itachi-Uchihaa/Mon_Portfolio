const Contact = () => {
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Île-de-France Paris, France.
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">voldizola1@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+33 06 70 26 42 31</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-info">
              <h4>Availability</h4>
              <p>
                For any questions or concerns, please do not hesitate to contact me by email or phone. I am available during the following hours:
              </p>
              <ul>
                <li><strong>Monday-Tuesday :</strong> 10:00 AM - 6:20 PM</li>
                <li><strong>Saturday :</strong> 10:00 AM - 2:00 PM</li>
                <li><strong>Sunday :</strong> Closed</li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
