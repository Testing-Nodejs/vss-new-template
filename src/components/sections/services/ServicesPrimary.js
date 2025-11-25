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
      title: "Software Development",
      iconName: "/images/service/vss-software.jpg",
      desc: "We provide end-to-end software development services tailored to meet your business goals. From requirement analysis and UI/UX design to development, testing, and deployment, we build reliable and scalable software solutions using the latest technologies. Our focus is on delivering secure, high-performance applications that enhance your business operations.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      iconName: "/images/service/vss-mobile.jpg",
      desc: "We create powerful and intuitive mobile applications for Android and iOS platforms. Whether it’s a business app, e-commerce app, or custom solution, our team develops fast, responsive, and user-friendly apps with modern interfaces. We ensure seamless performance and integration to give your customers the best mobile experience.",
    },
    {
      id: 3,
      title: "CRM & ERP Softwares",
      iconName: "/images/service/vss-crm-alt.jpg",
      desc: "Our CRM and ERP solutions help businesses streamline operations, manage customers, control finances, and improve overall productivity. We design and develop CRM/ERP systems that are flexible, secure, and scalable, allowing businesses of all sizes to monitor and manage their resources in real time.",
    },
    {
      id: 4,
      title: "BPO & Support Softwares",
      iconName: "/images/service/vss-bpo.jpg",
      desc: "We develop high-performance BPO and customer support software solutions that handle call management, ticketing, reporting, workflow automation, and more. Our systems help support teams deliver faster responses, increase customer satisfaction, and improve operational efficiency.",
    }, 
    {
      id: 5,
      title: "Medical Billing, Coding & Transcription Services",
      iconName: "/images/service/vss-medical.jpg",
      desc: "We provide professional medical billing, medical coding, and transcription services for healthcare providers. Our team ensures accurate coding, error-free billing, and fast processing to help clinics and hospitals reduce workload and improve revenue cycle management. All services follow industry standards and maintain strict data confidentiality.",
    }, 
    {
      id: 6,
      title: " Outsourcing Services",
      iconName: "/images/service/vss-outsource.jpg",
      desc: "We offer reliable outsourcing services that help businesses reduce operational costs and improve productivity. From IT support and development to back-office processes, our team ensures timely delivery, quality output, and complete transparency—allowing you to focus on your core business while we handle the rest.",
    },
    // {
    //   id: 8,
    //   title: "Unmatched Expertise",
    //   iconName: "fa fa-award",
    //   desc: "Years of project experience with strong technical and domain know-how.",
    // },
    // {
    //   id: 9,
    //   title: "Partner-Driven Approach",
    //   iconName: "fa fa-handshake-o",
    //   desc: "Collaborative engagement ensuring your business goals shape the final solution.",
    // },
    // {
    //   id: 10,
    //   title: "Modern Development Process",
    //   iconName: "fa fa-code",
    //   desc: "Agile methodologies, CI/CD, cloud-native tools, and best coding standards.",
    // },
    // {
    //   id: 11,
    //   title: "Quality-First Mindset",
    //   iconName: "fa fa-check-circle",
    //   desc: "Dedicated QA team ensuring stable, secure, high-performance delivery",
    // },
    // {
    //   id: 12,
    //   title: "Customer-Oriented",
    //   iconName: "fa fa-user-circle",
    //   desc: "Solutions aligned with your budget, timeline, and long-term vision.",
    // },
    // {
    //   id: 13,
    //   title: "Market & Technology Aligned",
    //   iconName: "fa fa-line-chart",
    //   desc: "Continuous adoption of emerging technologies to keep you ahead.",
    // },
    // {
    //   id: 14,
    //   title: "Flexible Engagement Models",
    //   iconName: "fa fa-exchange",
    //   desc: "Tailored development processes based on your business strategy.",
    // },
    // {
    //   id: 15,
    //   title: "Robust Infrastructure",
    //   iconName: "fa fa-server",
    //   desc: "High-end systems, secure networks, and high-speed connectivity.",
    // },
    // {
    //   id: 16,
    //   title: "24×7 Support & Maintenance",
    //   iconName: "fa fa-headphones",
    //   desc: "Dedicated team available round-the-clock for smooth operations.",
    // },
    // {
    //   id: 17,
    //   title: "Experienced Manpower",
    //   iconName: "fa fa-user-tie",
    //   desc: "Skilled engineers with strong technical & managerial capability.",
    // },
    // {
    //   id: 18,
    //   title: "GenAI-Powered Solutions",
    //   iconName: "fa fa-robot",
    //   desc: "AI chatbots & virtual assistants, Workflow automation using LLMs, AI-powered analytics & insights, Tailored GenAI integrations for mobile & web apps, Intelligent document processing & data extraction",
    // },
    // {
    //   id: 19,
    //   title: "Modern Web & Mobile Technologies",
    //   iconName: "fa fa-mobile",
    //   desc: "React Native for high-performance mobile apps,React.js, Next.js for modern web platforms, Flutter for cross-platform experiences, Node.js, Python, .NET Core for scalable backend services, Microservices, Serverless Architecture, Progressive Web Apps (PWA), API-first development",
    // },
    // {
    //   id: 20,
    //   title: "What We Deliver",
    //   iconName: "fa fa-shipping-fast",
    //   desc: "Veriteam Software Solutions provides consulting and IT services globally — helping clients conceptualize, build, and implement technology-driven business transformations. We create solutions for a fast-changing digital environment where business and technology strategies converge.",
    // },
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
