"use client";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getALlServices from "@/libs/getALlServices";
import makeWowDelay from "@/libs/makeWowDelay";

const ServicesPrimary = () => {
  const items = [
    {
      id: 1,
      title: "What We Do",
      iconName: "fa fa-cogs",
      desc: "Veriteam Software Solutions delivers end-to-end digital services — from custom web design to enterprise-grade, scalable applications. We blend domain expertise with advanced technologies to build solutions that are efficient, secure, and aligned with your business goals.",
    },
    {
      id: 2,
      title: "Our Team",
      iconName: "fa fa-users",
      desc: "A young, talented, and experienced group driven by confidence, competence, and care. We grow with our clients through long-term relationships, global exposure, and continuous innovation. Our Services are Software Development Team, BPO & Support Team, Medical Billing & Support Team, Business Development  Team, Administrative Team",
    },
    {
      id: 3,
      title: "Why Veriteam Software?",
      iconName: "fa fa-question-circle",
      desc: "Unmatched Expertise & Years of project experience with strong technical and domain know-how.",
    },
    {
      id: 4,
      title: "Unmatched Expertise",
      iconName: "fa fa-award",
      desc: "Years of project experience with strong technical and domain know-how.",
    },
    {
      id: 5,
      title: "Partner-Driven Approach",
      iconName: "fa fa-handshake-o",
      desc: "Collaborative engagement ensuring your business goals shape the final solution.",
    },
    {
      id: 6,
      title: "Modern Development Process",
      iconName: "fa fa-code",
      desc: "Agile methodologies, CI/CD, cloud-native tools, and best coding standards.",
    },
    {
      id: 7,
      title: "Quality-First Mindset",
      iconName: "fa fa-check-circle",
      desc: "Dedicated QA team ensuring stable, secure, high-performance delivery",
    },
    {
      id: 8,
      title: "Customer-Oriented",
      iconName: "fa fa-user-circle",
      desc: "Solutions aligned with your budget, timeline, and long-term vision.",
    },
    {
      id: 9,
      title: "Market & Technology Aligned",
      iconName: "fa fa-line-chart",
      desc: "Continuous adoption of emerging technologies to keep you ahead.",
    },
    {
      id: 10,
      title: "Flexible Engagement Models",
      iconName: "fa fa-exchange",
      desc: "Tailored development processes based on your business strategy.",
    },
    {
      id: 11,
      title: "Robust Infrastructure",
      iconName: "fa fa-server",
      desc: "High-end systems, secure networks, and high-speed connectivity.",
    },
    {
      id: 12,
      title: "24×7 Support & Maintenance",
      iconName: "fa fa-headphones",
      desc: "Dedicated team available round-the-clock for smooth operations.",
    },
    {
      id: 13,
      title: "Experienced Manpower",
      iconName: "fa fa-user-tie",
      desc: "Skilled engineers with strong technical & managerial capability.",
    },
    {
      id: 14,
      title: "GenAI-Powered Solutions",
      iconName: "fa fa-robot",
      desc: "AI chatbots & virtual assistants, Workflow automation using LLMs, AI-powered analytics & insights, Tailored GenAI integrations for mobile & web apps, Intelligent document processing & data extraction",
    },
    {
      id: 15,
      title: "Modern Web & Mobile Technologies",
      iconName: "fa fa-mobile",
      desc: "React Native for high-performance mobile apps,React.js, Next.js for modern web platforms, Flutter for cross-platform experiences, Node.js, Python, .NET Core for scalable backend services, Microservices, Serverless Architecture, Progressive Web Apps (PWA), API-first development",
    },
    {
      id: 16,
      title: "What We Deliver",
      iconName: "fa fa-shipping-fast",
      desc: "Veriteam Software Solutions provides consulting and IT services globally — helping clients conceptualize, build, and implement technology-driven business transformations. We create solutions for a fast-changing digital environment where business and technology strategies converge.",
    },
  ];
  const limit = 6;
  // get pagination details
  const {
    currentItems,
    currentpage,
    setCurrentpage,
    paginationItems,
    currentPaginationItems,
    totalPages,
    handleCurrentPage,
    firstItem,
    lastItem,
  } = usePagination(items, limit);
  const totalItems = items?.length;
  const totalItemsToShow = currentItems?.length;
  return (
    <div className="tj-service-section service-4 section-gap">
      <div className="container">
        <div className="row row-gap-4">
          {currentItems?.length
            ? currentItems?.map((item, idx) => (
                <div
                  key={idx}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={makeWowDelay(idx, 0.1)}
                >
                  <ServiceCard4 service={item} idx={idx} />
                </div>
              ))
            : ""}
        </div>
        {/* <!-- post pagination --> */}
        {totalItemsToShow < totalItems ? (
          <Paginations
            paginationDetails={{
              currentItems,
              currentpage,
              setCurrentpage,
              paginationItems,
              currentPaginationItems,
              totalPages,
              handleCurrentPage,
              firstItem,
              lastItem,
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServicesPrimary;
