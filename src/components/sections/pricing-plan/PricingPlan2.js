import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const PricingPlan2 = () => {
  return (
    <section className="tj-pricing-section-2 section-gap section-separator slidebar-stickiy-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1">
            <BootstrapWrapper>
              <div className="accordion tj-faq pricing-accordion" id="pricing">
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-1"
                    aria-expanded="true"
                  >
                    Extensive Experience
                  </button>
                  <div
                    id="pricing-1"
                    className="collapse show"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="pricing-top">
                          <div className="package-desc">
                            <p style={{ textAlign: "justify" }}>
                              With decades of industry expertise, we bring
                              unmatched technical knowledge and proven delivery
                              capabilities across projects of all sizes and
                              complexities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-2"
                    aria-expanded="false"
                  >
                    Partnership Approach
                  </button>
                  <div
                    id="pricing-2"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            We collaborate as long-term strategic
                            partners—aligning solutions with your goals,
                            adapting to evolving needs, and supporting you
                            beyond project completion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-3"
                    aria-expanded="false"
                  >
                    Robust Design & Development
                  </button>
                  <div
                    id="pricing-3"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Our development process leverages modern
                            methodologies, advanced tools, and tailored
                            workflows to ensure seamless, high-quality solution
                            delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-4"
                    aria-expanded="false"
                  >
                    Strong Security & Compliance
                  </button>
                  <div
                    id="pricing-4"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Security is embedded into every layer of
                            development. We follow secure coding standards,
                            conduct periodic audits, adopt encryption best
                            practices, and ensure adherence to global security
                            frameworks—protecting your data, systems, and
                            reputation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-5"
                    aria-expanded="false"
                  >
                    GenAI & Modern Technology Ready
                  </button>
                  <div
                    id="pricing-5"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            We integrate cutting-edge AI and GenAI
                            capabilities—automation, intelligent analytics,
                            NLP-driven features, and AI-assisted workflows—to
                            help businesses innovate faster and operate smarter.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-6"
                    aria-expanded="false"
                  >
                    Quality-Driven Processes
                  </button>
                  <div
                    id="pricing-6"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Our dedicated QA team enforces rigorous testing,
                            process monitoring, and continuous improvement to
                            ensure flawless, dependable, and stable product
                            delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-7"
                    aria-expanded="false"
                  >
                    Customer-Centric Delivery
                  </button>
                  <div
                    id="pricing-7"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Every solution is tailored to your business needs,
                            budget, and timeline. Your satisfaction and
                            long-term success are always our top priorities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-8"
                    aria-expanded="false"
                  >
                    Market-Oriented Mindset
                  </button>
                  <div
                    id="pricing-8"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            We stay updated with global IT trends and adopt the
                            latest technologies early—helping you stay
                            competitive in a fast-changing digital landscape.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-9"
                    aria-expanded="false"
                  >
                    Flexible Engagement Model
                  </button>
                  <div
                    id="pricing-9"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            From processes to methodologies, everything is
                            customizable. We adapt to your workflows and
                            business vision for smooth execution and perfect
                            alignment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-10"
                    aria-expanded="false"
                  >
                    Modern Infrastructure
                  </button>
                  <div
                    id="pricing-10"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Our high-performance systems, secure networks,
                            licensed software suite, and high-speed connectivity
                            ensure efficient project development and delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-11"
                    aria-expanded="false"
                  >
                    24/7 Support & Maintenance
                  </button>
                  <div
                    id="pricing-11"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Round-the-clock technical support and proactive
                            maintenance keep your systems running with minimal
                            downtime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-12"
                    aria-expanded="false"
                  >
                    Experienced & Skilled Team
                  </button>
                  <div
                    id="pricing-12"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Our talented team combines deep technical expertise,
                            strong domain knowledge, and exceptional
                            problem-solving skills—ensuring consistent,
                            top-quality project outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item pricing-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pricing-13"
                    aria-expanded="false"
                  >
                    CALL TO ACTION
                  </button>
                  <div
                    id="pricing-13"
                    className="collapse"
                    data-bs-parent="#pricing"
                  >
                    <div className="accordion-body">
                      <div className="pricing-header">
                        <div className="package-desc">
                          <p style={{ textAlign: "justify" }}>
                            Do you have any questions about Veriteam Software
                            services that could be provided to your company?
                            Please contact us.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BootstrapWrapper>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="content-wrap slidebar-stickiy">
              <div className="sec-heading style-4">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>VSS — Automation Solutions
                </span>
                <h2 className="sec-title title-anim">Key Advantages.</h2>
              </div>
              <p className="desc">
                Reason to Choose Veriteam Software
              </p>
              <div
                className="d-none d-lg-inline-flex wow fadeInUp"
                data-wow-delay=".6s"
              >
                <ButtonPrimary text={"Contact Us"} url={"/contact"} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-lg-none d-flex mt-5">
              <ButtonPrimary text={"Contact Us"} url={"/contact"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan2;
