import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="tj-footer-section footer-1 section-gap-x">
      <div className="footer-main-area" style={{paddingBottom: "3%"}}>
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
                <h5 className="title">Quick Links</h5>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/whyus">Why Us</Link>
                  </li>
                  <li>
                    <Link href="/Products">Our Products</Link>
                  </li>
                  <li>
                    <Link href="/privacypolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
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
                    <Link href="/Clients">Our Clients</Link>
                  </li>
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

      <div className={styles.certificatesContainer}>
        <div className={styles.certGrid}>
          <div className={styles.certItem}>
            <Image
              src="/images/logos/001.jpeg"
              alt="CMMI Level 3"
              width={100}
              height={100}   
              className={styles.certLogo}
            />
            <p className={styles.certTitle}>CMMI Level 3 Certified</p>
            <p className={styles.certDesc}>
              Capability Maturity Model Integration
            </p>
          </div>

          <div className={styles.certItem}>
            <Image
              src="/images/logos/002.jpeg"
              alt="ISO 9001:2015"
              width={100}
              height={100}
              className={styles.certLogo}
            />
            <p className={styles.certTitle}>ISO 9001:2015</p>
            <p className={styles.certDesc}>Quality Management System</p>
          </div>

          <div className={styles.certItem}>
            <Image
              src="/images/logos/003.png"
              alt="Ministry of Corporate Affairs"
              width={100}
              height={100}
              className={styles.certLogo}
            />
            <p className={styles.certTitle}>Ministry of Corporate Affairs</p>
            <p className={styles.certDesc}>Govt. of India Registered</p>
          </div> 

          <div className={styles.certItem}>
            <Image
              src="/images/logos/004.png"
              alt="MSME"
              width={100}
              height={100}
              className={styles.certLogo}
            />
            <p className={styles.certTitle}>MSME Registered</p>
            <p className={styles.certDesc}>Micro, Small & Medium Enterprises</p>
          </div>
        </div>
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
