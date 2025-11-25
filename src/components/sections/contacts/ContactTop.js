import Link from "next/link";

const ContactTop = () => {
  return (
    <div className="tj-contact-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>Contact info
              </span>
              <h2 className="sec-title title-anim">
                <span>Reach</span> Out to Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div
              className="contact-item style-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-icon">
                <i className="tji-location-3"></i>
              </div>
              <h3 className="contact-title">Our Location</h3>
              <p>
                1st Floor, Cauvery Complex 16th Main, 5th Cross Road,
                Saraswathipuram, Mysuru, Karnataka 570009
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div
              className="contact-item style-2 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="contact-icon">
                <i className="tji-envelop"></i>
              </div>
              <h3 className="contact-title">Email us</h3>
              <ul className="contact-list">
                <li>
                  <Link href="mailto:info@vssitcompany.com">
                    info@vssitcompany.com
                  </Link>
                </li>
                <li>
                  <Link href="mailto:sales@vssitcompany.com">
                    sales@vssitcompany.com
                  </Link>
                </li>
                <li>
                  <Link href="mailto:admin@vssitcompany.com">
                    admin@vssitcompany.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div
              className="contact-item style-2 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="contact-icon">
                <i className="tji-phone"></i>
              </div>
              <h3 className="contact-title">Call us</h3>
              <ul className="contact-list">
                <li>
                  <Link href="tel:919986019715">+91 9986019715</Link>
                </li>
                <li>
                  <Link href="tel:919845468715">+91 9845468715</Link>
                </li>
                <li>
                  <Link href="tel:919880796233">+91 9880796233</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div
              className="contact-item style-2 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="contact-icon">
                <i className="tji-location-3"></i>
              </div>
              <h3 className="contact-title">Locate Us</h3>
              <ul className="contact-list">
                <li>Locate us on the map</li>
                <li className="active">
                  <Link href="/contact">Click Here</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
