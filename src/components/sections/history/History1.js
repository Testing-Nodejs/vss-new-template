import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
  const history = [
    {
      title: "ALMS-POS v3.0",
      desc: "The Active Laundry Management Point of Sale is enabled by very handy functionality and features that would decrease effort. Simple and laid on the line functions that would shorten day to day order management in your laundry. It comes with many useful tools to manage a laundry of whatever size.",
      points: [
        "Multiple Stores Access Facility",
        "Custom Pricing Control",
        "User Access Right Control",
        "Audit Trail",
        "Allow for Customization",
        "Custom Discount Rate",
        "Pick & Drop Clothes",
        "End to End Tracking Facility",
      ],
      year: "P1",
    },
    {
      title: "VERI-PHARM v2.0",
      desc: "VeriPharm application system is a sophisticated and robust and operation management system for small and midsized businesses.",
      points: [
        "Easy-2-Use",
        "Low Cost",
        "Full-suite CRM included",
        "Inventory Management and Operations",
        "Business Intelligence and Reporting",
        "Time and Project Management",
      ],
      year: "P2",
    },
    {
      title: "VERI-EDU ERP v3.0",
      desc: "Our superb expertise on cutting edge technology has brought online educational ERP software solution, a totally planned tool that simplifies your task - just like the snap of a finger. A fully integrated system for kindergartens, e-governance, schools, colleges, distant learning centres, training centers, autonomous institutions and university.",
      points: [
        "Easy to Use",
        "Centralizes Automation with Paperless Working",
        "Integration with Barcode/RFID/Biometric/SMS/Email",
        "Advance Security Settings",
        "100% Customizable Report",
        "Lower Cost as Compare to Market Price",
        "Increase efficiency, Enhance Productivity to Reduce Operating Costs",
        "Focus on Core Competence",
        "Lower Risks & Improved ROI",
        "Transparency & Accountability in all processes",
      ],
      year: "P3",
    },
    {
      title: "VERITRA v2.0",
      desc: "The travel agents can use our web application to fulfil the travel related needs of their customers. By integrating this travel api with your own software solution, our end to end travel management solution enables to offer unbeatable travel related services to your potential clients. We offer you a unproblematic base in the form of faultless travel related services which you can use to develop a strong customer segment for yourself.",
      points: [
        "Travel Ticket Booking",
        "Air Ticket Booking (Domestic & International)",
        "Hotel Booking",
        "Car Booking (Rental/Hire)",
        "Bus Booking",
        "Dynamic Holiday Packages",
        "Tour Packages",
        "Payment Gateway Integration",
        "SMS Gateway Incorporation",
        "Admin Control Panel",
        "User Login System",
        "Agent Management",
      ],
      year: "P4",
    },
    {
      title: "ONLINE LOGISTICS MANAGEMENT TOOL v1.0",
      desc: "A fully integrated, solution that provides Shippers and Customers, Consignees and their logistics companies with full reflectiveness through the supply chain from customer order through delivery of goods.",
      points: [
        "Integrated Order Management",
        "Freight Management",
        "Warehouse management modules",
        "Process orders",
        "Maintain inventory",
        "Track delivery",
      ],
      year: "P5",
    },
  ];
  return (
    <section className="tj-history-area section-bottom-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="timeline">
              {history?.length
                ? history?.map(({ title, desc, points, year }, idx) => (
                    <div
                      key={idx}
                      className="timeline-inner wow fadeInUp"
                      data-wow-delay={`0.${idx + 1 + idx}s`}
                    >
                      <div className="date">{year}</div>
                      <div className="content">
                        <div className="top">
                          <span>{modifyNumber(idx + 1)}.</span>
                          <h4 className="title">{title}</h4>
                          <p>{desc}</p>
                        </div>

                        {/* 🔥 Bottom section changed from images → UL LI */}
                        <div
                          className="bottom"
                          style={{ display: "flex", paddingLeft: "15%" }}
                        >
                          {points?.length ? (
                            <ul className="history-points">
                              {points.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History1;
