"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import getALlServices from "@/libs/getALlServices";

const Services2 = () => {
  const services = [
    {
      id: 1,
      title: "Company Highlights",
      iconName: "tji-service-1",
      desc: "With over 20+ years of industry expertise, Veriteam Software Solutions Private Limited stands as a trusted technology partner for businesses across the globe. Our commitment to innovation, quality, and customer success has enabled us to deliver impactful digital solutions across multiple domains.",
    },
    {
      id: 2,
      title: "20+ Years of Experience",
      iconName: "tji-service-2",
      desc: "A long-standing legacy of delivering reliable, scalable, and future-ready technology solutions. Our experience spans enterprise-level projects, custom platforms, and large-scale digital transformation initiatives.",
    },
    {
      id: 3,
      title: "Global Reach",
      iconName: "tji-service-3",
      desc: "We serve clients across different regions, helping diverse businesses adopt digital solutions that drive growth and efficiency. Our global engagement model ensures seamless project execution and exceptional support.",
    },
    {
      id: 4,
      title: "Diverse Client Portfolio",
      iconName: "tji-service-4",
      desc: "From startups to large enterprises, we work with organizations across Education, Manufacturing, Healthcare, Real Estate, and various emerging industries — consistently delivering value-driven results.",
    },
    {
      id: 5,
      title: "Technology Expertise",
      iconName: "tji-service-5",
      desc: "Backed by a skilled team of developers, architects, designers, and domain experts, we combine modern technologies with strategic thinking to create powerful web, mobile, and enterprise applications.",
    },
    {
      id: 6,
      title: "Uncompromised Quality Focus",
      iconName: "tji-service-6",
      desc: "Quality and customer satisfaction are at the core of everything we do. Our proven track record, repeat partnerships, and long-term client relationships reflect our dedication to delivering excellence every time.",
    },
  ];

  return (
    <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="content-wrap  slidebar-stickiy">
              <div className="sec-heading style-2">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  Our Highlights
                </span>
                <h2 className="sec-title text-white text-anim">
                  <span>VSS</span> — Where Technology Meets Purpose
                </h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay=".6s">
                <ButtonPrimary text={"About Us"} url={"/services"} />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-wrapper-2">
              {services?.length
                ? services?.map((service, idx) => (
                    <ServiceCard2 key={idx} service={service} idx={idx} />
                  ))
                : ""}
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
      <div className="bg-shape-3">
        <img src="/images/shape/shape-blur.svg" alt="" />
      </div>
    </section>
  );
};

export default Services2;
