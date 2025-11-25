import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";
import Image from "next/image";

const ServiceCard4 = ({ service, idx, lastItem }) => {
  const {
    title,
    desc,
    id,
    totalProject,
    img2 = "/images/service/service-2.webp",
    svg,
    iconName,
  } = service || {};

  return (
    <div className="service-item style-4">
      <div className="service-icon custom-service">
        {/* <i className={iconName ? iconName : "tji-service-1"}></i> */}
        <Image
          src={iconName}
          alt={title}
          width={500}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="service-content">
        <h4 className="title">
          <Link href={`#`}>{title}</Link>
        </h4>
        <p className="desc" style={{ textAlign: "justify" }}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard4;
