import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
  return (
    <section className="tj-about-section-2 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
            <div
              className="about-img-area style-2 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="about-img overflow-hidden">
                <Image
                  data-speed=".8"
                  src="/images/about/about-5.webp"
                  alt=""
                  width={591}
                  height={639}
                />
              </div>
              <div className={`box-area ${type === 2 ? "style-2" : ""}`}>
                <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                  <h4 className="title">Business Progress</h4>
                  <ul className="tj-progress-list">
                    <li>
                      <h6 className="tj-progress-title">Revenue</h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">82%</span>
                        <div
                          className="tj-progress-bar"
                          data-percent="82"
                        ></div>
                      </div>
                    </li>
                    <li>
                      <h6 className="tj-progress-title">Satisfaction</h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">90%</span>
                        <div
                          className="tj-progress-bar"
                          data-percent="90"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
            <div className="about-content-area">
              <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Get to Know Us
                </span>
                <h2 className="sec-title title-anim">Veriteam Software Solution</h2>
              </div>
            </div>
            <div className="about-bottom-area">
              <div
                className="mission-vision-box wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <h4 className="title">About Us</h4>
                <p className="desc" style={{textAlign: "justify"}}>
                  Veriteam Software Solutions Private Limited provides
                  consulting and IT services to clients globally - as partners
                  to conceptualize & realize technology driven business
                  transformation initiatives. We provide solutions for a dynamic
                  environment where business and technology strategies converge.
                  Our approach focuses on new ways of business combining IT
                  innovation and adoption while also leveraging an
                  organization's current IT assets. We work with large global
                  corporations and new generation technology companies, to build
                  new products or services. Veriteam persistently aims to exceed
                  customer expectation by focusing on value-based solutions
                  through right consultancy and teamed talent. With its
                  specialized domain specific solutions for Educational
                  Industries, Manufacturing, Healthcare and Real Estate.
                  Veriteam is well equipped with the technology competence to
                  cater to the best in the industry with quality web and mobile
                  solutions and innovative products. Veriteam has proven track
                  record with all its clients in earning credibility and
                  customer loyalty with repeat business across the globe..
                </p>
              </div>
            </div>
            <div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
              <ButtonPrimary text={"Learn More About Us"} url={"/about"} />
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
    </section>
  );
};

export default About3;
