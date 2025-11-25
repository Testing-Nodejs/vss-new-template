import FeatureCard2 from "@/components/shared/cards/FeatureCard2";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Features2 = () => {
  const features = [
    {
      id: 1,
      title: "Graduates",
      icon: "fa fa-graduation-cap",
      desc: "Join our dynamic team and kickstart your career with exciting opportunities for growth and learning.",
    },
    {
      id: 2,
      title: "Experienced Professionals",
      icon: "fa fa-certificate",
      desc: "We value your expertise and offer challenging roles that leverage your skills to drive innovation and success.",
    },
    {
      id: 3,
      title: "Engineering Professionals",
      icon: "fa fa-tools",
      desc: "We are looking for talented engineers to join our team and contribute to cutting-edge projects in a collaborative environment.",
    },
    {
      id: 3,
      title: "Leadership / Managerial",
      icon: "fa fa-users-cog",
      desc: "We seek visionary leaders to guide our teams towards excellence and foster a culture of innovation and growth.",
    },
  ];
  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Explore Opportunities
              </span>
              <h3>Explore Opportunities – Where Your Work Creates Impact</h3>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features?.length
            ? features?.map((feature, idx) => (
                <div key={idx} className="col-xl-3 col-md-6">
                  <FeatureCard2 feature={feature} idx={idx} />
                </div>
              ))
            : ""}
        </div>
        <div className="row" style={{marginTop: "5%"}}>
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
              <h3 className="title">
                Feel Free to Get in Touch or Visit our Location.
              </h3>
              <form id="contact-form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="text" name="cfName" />
                      <label className="cf-label">
                        Full Name <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="email" name="cfEmail" />
                      <label className="cf-label">
                        Email Address <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="tel" name="cfPhone" />
                      <label className="cf-label">
                        Phone number <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <ReactNiceSelect
                            selectedIndex={0}
                            options={[
                              { value: "0", optionName: "Chose a option" },
                              { value: "1", optionName: "Business Strategy" },
                              { value: "2", optionName: "Customer Experience" },
                              {
                                value: "3",
                                optionName: "Sustainability and ESG",
                              },
                              {
                                value: "4",
                                optionName: "Training and Development",
                              },
                              {
                                value: "5",
                                optionName: "IT Support & Maintenance",
                              },
                              {
                                value: "6",
                                optionName: "Marketing Strategy",
                              },
                            ]}
                            // getSelectedOption={handleSelect}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-input message-input">
                      <textarea name="cfMessage" id="message"></textarea>
                      <label className="cf-label">
                        Type message <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button className="tj-primary-btn" type="submit">
                      <span className="btn-text">
                        <span>Submit Now</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
