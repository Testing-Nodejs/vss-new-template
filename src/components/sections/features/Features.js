import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
  const features = [
    {
      title: "WHO WE ARE",
      desc: "Veriteam Software is an established global software development company specializing in delivering powerful, scalable, and innovative digital solutions. With more than 20 years of industry experience, we have cultivated a talented team of technology experts dedicated to solving complex business challenges through modern software engineering. Our clients range from emerging startups to large enterprises—all seeking dependable digital platforms to accelerate revenue generation, improve collaboration, and achieve operational efficiency. We partner with each organization to deliver solutions that support long-term success and digital transformation.",
      icon: "fa fa-user-circle",
    },
    {
      title: "WHAT WE DO",
      desc: "Veriteam Software delivers a complete range of web and digital solutions, including custom website design, enterprise-grade web applications, and complex internet systems. Every solution we develop is guided by a clear understanding of our clients’ business needs, ensuring dependable, scalable, and future-ready outcomes. By blending deep industry knowledge with strong technology competence and proven development frameworks, we deliver high-quality results efficiently and cost-effectively—enabling organizations to maximize productivity and maintain a competitive edge.",
      icon: "fa fa-tasks",
    },
    {
      title: "OUR TEAMS",
      desc: "At Veriteam Software, our strength lies in our people—a dynamic mix of young talent and seasoned professionals who bring passion, expertise, and innovation to every engagement. We define ourselves by three core qualities: confidence, competence, and care. Our team actively explores opportunities around the world and grows alongside our clients, fostering long-term relationships built on trust, collaboration, and shared success. We believe in connecting with businesses and individuals globally, creating partnerships that last.",
      icon: "fa fa-users-cog",
    },
    {
      title: "WHY VERITEAM SOFTWARE?",
      desc: "We are a trusted business solutions provider backed by a young, talented, and experienced team. Known for our confidence, competence, and commitment, we work closely with clients to deliver reliable and impactful digital solutions. We seek opportunities worldwide and grow alongside our clients—building long-term relationships based on trust, collaboration, and shared success.",
      icon: "fa fa-check-circle",
    },
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {type == 2 ? (
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Choose the Best
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      <span>VSS — </span> Delivering Information Systems
                    </h2>
                  </div>
                  <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                    <ButtonPrimary text="Request a Call" url="/contact" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Choose the Best
                </span>
                <h2 className="sec-title title-anim">
                  Empowering Business with <span>Expertise.</span>
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-6">
              <FeatureCard feature={feature} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
