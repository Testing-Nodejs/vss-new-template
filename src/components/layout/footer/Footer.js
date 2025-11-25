import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="tj-footer-section footer-1 section-gap-x">
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/images/logos/Veriteam_Logo.png" alt="Logos" />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    VSS — Empowering Businesses with Intelligent Technology &
                    Delivering smart, scalable digital solutions for modern
                    enterprises.
                  </p>
                </div>
                <div className="award-logo-area">
                  <div className="award-logo">
                    <img src="/images/footer/award-logo-1.webp" alt="" />
                  </div>
                  <div className="award-logo">
                    <img src="/images/footer/award-logo-2.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="footer-widget widget-nav-menu wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="title">Choose Us</h5>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/whyus">Why Us</Link>
                  </li>
                  <li>
                    <Link href="/Clients">Our Clients</Link>
                  </li>
                  <li>
                    <Link href="/Products">Our Products</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div
                className="footer-widget widget-nav-menu wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h5 className="title">Know More</h5>
                <ul>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/portfolios">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div
                className="footer-widget widget-nav-menu wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h5 className="title">Head Quarter</h5>
                <ul>
                  <li>
                    <Link href="#">
                      <span className="icon">
                        <i
                          style={{ fontSize: "25px" }}
                          className="tji-location-3"
                        ></i>
                      </span>
                      <span className="text">
                        1st Floor, Cauvery Complex 16th Main, 5th Cross Road,
                        Saraswathipuram, Mysuru, Karnataka 570009
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@bexon.com">
                      <span className="icon">
                        <i
                          style={{ fontSize: "25px" }}
                          className="tji-envelop-2"
                        ></i>
                      </span>
                      <span className="text">sales@vssitcompany.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:10095447818">
                      <span className="icon">
                        <i
                          style={{ fontSize: "25px" }}
                          className="tji-phone-2"
                        ></i>
                      </span>
                      <span className="text">+91 9945273806</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageRow}>
        <Image src="/images/logos/001.jpeg" alt="Img1" width={120} height={120} />
        <Image src="/images/logos/002.jpeg" alt="Img2" width={120} height={120} />
        <Image src="/images/logos/003.jpeg" alt="Img3" width={120} height={120} />
        <Image src="/images/logos/004.jpeg" alt="Img4" width={120} height={120} />
      </div>
      <div className="tj-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="footer-contact">
                  <ul>
                    <li>
                      <Link href="tel:10095447818">
                        <span className="icon">
                          <i className="tji-phone-2"></i>
                        </span>
                        <span className="text">+91 9945273806</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@bexon.com">
                        <span className="icon">
                          <i className="tji-envelop-2"></i>
                        </span>
                        <span className="text">sales@vssitcompany.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>
                    &copy; 2025 
                    <Link
                      href="https://themeforest.net/user/theme-junction/portfolio"
                      target="_blank"
                    >
                      Veriteam Software Solutions
                    </Link>{" "}
                    All right reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <img src="/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="bg-shape-2">
        <img src="/images/shape/pattern-3.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
