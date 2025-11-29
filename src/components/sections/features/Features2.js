"use client";
import FeatureCard2 from "@/components/shared/cards/FeatureCard2";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

import { useState } from "react";

const Features2 = () => {
  const features = [
    {
      id: 1,
      title: "Graduates",
      icon: "fa fa-graduation-cap",
      desc: "Join our dynamic team and kickstart your career with exciting opportunities for growth and learning.",
      color: "linear-gradient(180deg, #EF483F 0%, #F86E1A 100%)",
    },
    {
      id: 2,
      title: "Experienced Professionals",
      icon: "fa fa-briefcase",
      desc: "We value your expertise and offer challenging roles that leverage your skills to drive innovation and success.",
      color: "linear-gradient(180deg, #65277E 0%, #9B59B6 100%)",
    },
    {
      id: 3,
      title: "Engineering Professionals",
      icon: "fa fa-tools",
      desc: "We are looking for talented engineers to join our team and contribute to cutting-edge projects in a collaborative environment.",
      color: "linear-gradient(180deg, #20C364 0%, #15B99E 100%)",
    },
    {
      id: 3,
      title: "Leadership / Managerial",
      icon: "fa fa-users-cog",
      desc: "We seek visionary leaders to guide our teams towards excellence and foster a culture of innovation and growth.",
      color: "linear-gradient(180deg, #024288 0%, #006ADC 100%)",
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setIsSubmitting(false);

    if (data.success) {
      alert("Your application has been submitted successfully!");
      window.location.href = "/careers"; // redirect
    } else {
      alert("Failed to submit application.");
    }
  }

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
        <div className="row" style={{ marginTop: "5%" }}>
          {/* <div className="col-lg-3"></div> */}
          <div className="col-lg-12">
            <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
              <h3 className="title">Apply Now...</h3>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="career-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      First Name <span>*</span>
                    </label>
                    <input type="text" name="cfFirstName" required />
                  </div>

                  <div className="form-group">
                    <label>
                      Last Name <span>*</span>
                    </label>
                    <input type="text" name="cfLastName" required />
                    <input
                      type="text"
                      defaultValue="career"
                      name="cftype"
                      required
                      hidden
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input type="email" name="cfEmail" required />
                  </div>

                  <div className="form-group">
                    <label>
                      Phone Number <span>*</span>
                    </label>
                    <input type="tel" name="cfPhone" required />
                  </div>

                  <div className="form-group">
                    <label>
                      City <span>*</span>
                    </label>
                    <input type="text" name="cfCity" required />
                  </div>

                  {/* Updated Basic Select Dropdown */}
                  <div className="form-group">
                    <label>
                      Position Applied <span>*</span>
                    </label>
                    <select name="cfPosition" required>
                      <option value="">Choose a Position</option>
                      <option value="Programmer">Programmer</option>
                      <option value="Software Engineering">
                        Software Engineering
                      </option>
                      <option value="BPO & Support Executive">
                        BPO & Support Executive
                      </option>
                      <option value="Sales & Marketing Executive">
                        Sales & Marketing Executive
                      </option>
                      <option value="Mobile APP Developer">
                        Mobile APP Developer
                      </option>
                      <option value="Customer Service Engineering">
                        Customer Service Engineering
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Education <span>*</span>
                    </label>
                    <select name="cfEducation" required>
                      <option value="">Choose Education</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor Degree">Bachelor Degree</option>
                      <option value="Master Degree">Master Degree</option>
                      <option value="PhD">PhD</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Resume <span>*</span>
                    </label>
                    <input type="file" name="cfResume" required />
                  </div>

                  <div className="form-group full">
                    <label>
                      About / Short Profile <span>*</span>
                    </label>
                    <textarea name="cfMessage" rows="5" required></textarea>
                  </div>

                  <div className="submit-btn">
                    <button type="submit" className="tj-primary-btn">
                      {isSubmitting ? "Submitting..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-lg-3"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Features2;
