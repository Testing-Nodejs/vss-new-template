"use client";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import { useState } from "react";

const Contact3 = () => {
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
      alert("Your enquiry request has been submitted successfully!");
      window.location.href = "/contact"; // redirect
    } else {
      alert("Failed to submit application.");
    }
  }

  return (
    <section className="tj-contact-section-2 section-bottom-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{marginBottom: "5%"}}>
            <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
              <h3 className="title">Feel Free to Get in Touch or Visit Us.</h3>
              <form onSubmit={handleSubmit} id="career-form">
                <div className="row">
                  <div className="col-md-12">
                    <label>
                      Full Name <span>*</span>
                    </label>
                    <input type="text" name="cfFirstName" required />
                  </div>
                  <div className="col-md-12" style={{marginTop: "5%"}}>
                    <label>
                      Email <span>*</span>
                    </label>
                    <input type="email" name="cfEmail" required />
                  </div>
                  <div className="col-md-12" style={{marginTop: "5%"}}>
                    <label>
                      Phone Number <span>*</span>
                    </label>
                    <input type="tel" name="cfPhone" required />
                    <input
                      type="text"
                      defaultValue="contact"
                      name="cftype"
                      required
                      hidden
                    />
                  </div>
                  <div className="col-md-12" style={{marginTop: "5%"}}>
                    <label>
                      Enquiry Type <span>*</span>
                    </label>
                    <select name="cfPosition" required>
                      <option value="">Choose a Option</option>
                      <option value="Mobile APP">Mobile APP</option>
                      <option value="Website">Website</option>
                      <option value="Call Center">Call Center</option>
                      <option value="Help Desk Center">Help Desk Center</option>
                      <option value="Medical Billing">Medical Billing</option>
                      <option value="Government Projects">
                        Government Projects
                      </option>
                    </select>
                  </div>
                  <div className="col-md-12" style={{marginTop: "5%"}}>
                    <label>
                      Message <span>*</span>
                    </label>
                    <textarea name="cfMessage" rows="5" required></textarea>
                  </div>
                  <div className="submit-btn" style={{marginTop: "5%"}}>
                    <button type="submit" className="tj-primary-btn">
                      {isSubmitting ? "Submitting..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
              <div className="contact-info-box">
                <p
                  style={{
                    fontSize: "25px",
                    borderBottom: "1px solid #3883b9",
                    color: "#3883b9",
                  }}
                >
                  <b>General Enquiries</b>
                </p>
                <p>
                  <b>Email: </b>info@rprocess.net
                </p>
                <p>
                  <b>Phone: </b>+91-7338189979
                </p>
                <p>
                  <b>Hours:</b> Monday – Friday, 9:00 AM – 6:00 PM IST
                </p>
              </div>

              <div className="contact-info-box" style={{ marginTop: "5%" }}>
                <p
                  style={{
                    fontSize: "25px",
                    borderBottom: "1px solid #3883b9",
                    color: "#3883b9",
                  }}
                >
                  <b>Registered Office:</b>
                </p>
                <p>
                  <b>Veriteam Software Solutions Pvt Ltd.</b>
                </p>
                <p>
                  1st Floor, Cauvery Complex 16th Main, 5th Cross Road,
                  Saraswathipuram, Mysuru, Karnataka (India) - 570009
                </p>
              </div>

              <div className="contact-info-box" style={{ marginTop: "5%" }}>
                <p
                  style={{
                    fontSize: "25px",
                    borderBottom: "1px solid #3883b9",
                    color: "#3883b9",
                  }}
                >
                  <b>Corporate Office:</b>
                </p>
                <p>
                  No 16, HUTCHINS, 3rd Cross, Wheeler Road Extension, Cook Town,
                  Bangalore India -560084
                </p>
              </div>

              <div className="contact-info-box" style={{ marginTop: "5%" }}>
                <p
                  style={{
                    fontSize: "25px",
                    borderBottom: "1px solid #3883b9",
                    color: "#3883b9",
                  }}
                >
                  <b>Corporate Office:</b>
                </p>
                <p>4/5, Leonard lane, F2, Richmond town, Bengaluru 560025</p>
                <p>+91 9880796233</p>
              </div>
              <div
                className="contact-info-box"
                style={{
                  marginTop: "5%",
                  borderTop: "1px solid #3883b9",
                }}
              >
                <p style={{marginTop: "5%"}}>
                  <b>
                    Serving clients across Middle East, USA, UK, Europe And
                    India,
                  </b>
                </p>
                <p>
                  24/7 support services are available for the ongoing projects
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
          <div className="col-lg-12" style={{ marginTop: "5%" }}>
            <div className="map-area wow fadeInUp" data-wow-delay=".3s">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2105466261214!2d76.62482587379856!3d12.301603329215782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7abaae3db01d%3A0x871e15d751f9a5d9!2sVeriteam%20Software!5e0!3m2!1sen!2sin!4v1763814978788!5m2!1sen!2sin"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3;
