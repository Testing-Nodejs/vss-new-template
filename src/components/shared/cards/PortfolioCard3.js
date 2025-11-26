import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = ({ portfolio }) => {
  const { title, img, desc, category, link } = portfolio ? portfolio : {};
  return (
    <div className="project-item">
      <div className="project-img">
        <Image src={img} alt="" width={434} height={420} />
      </div>
      <div className="project-content">
        <span className="categories">
          <Link href={`https://vssitcompany.com/`} target="_blank">{category}</Link>
        </span>
        <div className="project-text">
          <h4 className="title">
            <Link target="_blank" href={link}>{title}</Link>
          </h4>
          <p style={{marginTop: "5%"}}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard3;
