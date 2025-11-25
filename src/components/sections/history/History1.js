import modifyNumber from "@/libs/modifyNumber";
import { Colors } from "chart.js";
import Image from "next/image";

const History1 = () => {
  const history = [
    {
      title: "ALMS-POS v3.0",
      colors: "red",
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
      colors: "#ff8a00",
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
      title: "VERI-EDU SCHOOL v3.0",
      colors: "#316bff",
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
      title: "VERI-TRA v2.0",
      colors: "#911dd1",
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
      title: "ONLINE LOGISTICS MANAGEMENT CRM v1.0",
      colors: "#cd742f",
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
    {
      title: "VERI-EASY",
      colors: "green",
      desc: "Accounting and billing software that is simple to use, yet powerful enough to manage your business finances. Veri-Easy is designed for small and medium-sized businesses, freelancers, and entrepreneurs who need an easy way to keep track of their income and expenses.",
      points: [
        "Single Click Return Filing",
        "POS for Fast Billing",
        "Second Invoices via WhatsApp/Email",
        "Multiple Payment Modes (UPI, Card, Cash, Bank Transfer)",
        "Multiple User Access",
      ],
      year: "P6",
    },
  ];
  return (
    <section className="tj-history-area section-bottom-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="timeline">
              {history?.length
                ? history?.map(({ title, colors, desc, points, year }, idx) => (
                    <div
                      key={idx}
                      className="timeline-inner wow fadeInUp"
                      data-wow-delay={`0.${idx + 1 + idx}s`}
                    >
                      {/* <div className="date" style={{fontSize: "15px"}}>{year}</div> */}
                      <div className="content">
                        <div className="top">
                          <span>{modifyNumber(idx + 1)}.</span>
                          <h4 className="title" style={{color: colors}}>{title}</h4>
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
