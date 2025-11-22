import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
  const items = [
    {
      title: "Extensive Experience",
      desc: "With decades of industry expertise, we bring unmatched technical knowledge and proven delivery capabilities across projects of all sizes and complexities.",
      initActive: true,
    },
    {
      title: "Partnership Approach",
      desc: "We collaborate as long-term strategic partners—aligning solutions with your goals, adapting to evolving needs, and supporting you beyond project completion",
      initActive: false,
    },
    {
      title: "Robust Design & Development",
      desc: "Our development process leverages modern methodologies, advanced tools, and tailored workflows to ensure seamless, high-quality solution delivery.",
      initActive: false,
    },
    {
      title: "Strong Security & Compliance",
      desc: "Security is embedded into every layer of development. We follow secure coding standards, conduct periodic audits, adopt encryption best practices, and ensure adherence to global security frameworks—protecting your data, systems, and reputation.",
      initActive: false,
    },
    {
      title: "GenAI & Modern Technology Ready",
      desc: "We integrate cutting-edge AI and GenAI capabilities—automation, intelligent analytics, NLP-driven features, and AI-assisted workflows—to help businesses innovate faster and operate smarter.",
      initActive: false,
    },
	{
      title: "Quality-Driven Processes",
      desc: "Our dedicated QA team enforces rigorous testing, process monitoring, and continuous improvement to ensure flawless, dependable, and stable product delivery.",
      initActive: false,
    },
	{
      title: "Customer-Centric Delivery",
      desc: "Every solution is tailored to your business needs, budget, and timeline. Your satisfaction and long-term success are always our top priorities.",
      initActive: false,
    },
	{
      title: "Market-Oriented Mindset",
      desc: "We stay updated with global IT trends and adopt the latest technologies early—helping you stay competitive in a fast-changing digital landscape.",
      initActive: false,
    },
  ];
  return (
    <section
      className={`tj-faq-section section-gap  ${
        type === 3 || type === 4 ? "" : "tj-arrange-container-2"
      }`}
    >
      <div className="container">
        <div className="row justify-content-between">
          {type === 3 ? (
            <div className="col-lg-4">
              <div className="content-wrap">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box"></i>Common Questions
                  </span>
                  <h2 className="sec-title title-anim">
                    Key Advantages & Reason to Choose Us
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                  We stay ahead of curve, leveraging <br /> cutting-edge are
                  technologies and <br /> strategies to competitive
                </p>
                <div className="wow fadeInUp" data-wow-delay=".8s">
                  <ButtonPrimary text={"Request a Call"} url={"/contact"} />
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-6">
              <div
                className={`faq-img-area ${
                  type === 3 ? "" : "tj-arrange-item-2"
                }`}
              >
                <div className="faq-img overflow-hidden">
                  <Image
                    src="/images/faq/faq.webp"
                    alt=""
                    width={585}
                    height={629}
                  />
                  <h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
                    Need Help? Start Here...
                  </h2>
                </div>
                <div className="box-area ">
                  <div className="call-box">
                    <h4 className="title">Get Started Free Call? </h4>
                    <span className="call-icon">
                      <i className="tji-phone"></i>
                    </span>
                    <Link className="number" href="tel:18884521505">
                      <span>1-888-452-1505</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={`col-lg-${type === 3 ? "8" : "6"}`}>
            <BootstrapWrapper>
              <div
                className={`accordion tj-faq ${
                  type === 2 || type === 4 ? "style-2" : ""
                } ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
                id="faqOne"
              >
                {items?.length
                  ? items?.map((item, idx) => (
                      <FaqItem key={idx} item={item} idx={idx} />
                    ))
                  : ""}
              </div>
            </BootstrapWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq2;
