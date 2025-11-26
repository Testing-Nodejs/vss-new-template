"use client";

const Team3 = () => {
  return (
    <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <span
                style={{
                  color: "#ffb126",
                  fontSize: "40px",
                  fontWeight: "600",
                }}
              >
                Industries We Serve
              </span>
              <h2
                className="title"
                style={{
                  color: "#fff",
                  fontSize: "30px",
                }}
              >
                We Provide Solutions for a Wide Range of Industries
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="industry-grid">
            <div
              className="industry-card"
              style={{
                backgroundImage: "url('/images/industry/automotive.png')",
              }}
            >
              <h3>Automotive</h3>
            </div>

            <div
              className="industry-card"
              style={{
                backgroundImage: "url('/images/industry/manufacturing.png')",
              }}
            >
              <h3>Manufacturing</h3>
            </div>

            <div
              className="industry-card"
              style={{ backgroundImage: "url('/images/industry/retail.png')" }}
            >
              <h3>Retail / E-commerce</h3>
            </div>

            <div
              className="industry-card"
              style={{
                backgroundImage: "url('/images/industry/healthcare.png')",
              }}
            >
              <h3>HealthCare</h3>
            </div>

            <div
              className="industry-card"
              style={{ backgroundImage: "url('/images/industry/hotel.png')" }}
            >
              <h3>Hotel Industry</h3>
            </div>

            <div
              className="industry-card"
              style={{
                backgroundImage: "url('/images/industry/government.png')",
              }}
            >
              <h3>Government Work</h3>
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

export default Team3;
