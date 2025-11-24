import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = ({ portfolio }) => {
  const { title, img, desc, category } = portfolio ? portfolio : {};
  return (
    <div className="project-item">
      <div className="project-img">
        <Image src={img} alt="" width={434} height={420} />
      </div>
      <div className="project-content">
        <span className="categories">
          <Link href={`/portfolios/`}>{category}</Link>
        </span>
        <div className="project-text">
          <h4 className="title">
            <Link href={`/portfolios/`}>{title}</Link>
          </h4>
          <Link className="project-btn" href={`/portfolios/`}>
            <i className="tji-arrow-right-big"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard3;
