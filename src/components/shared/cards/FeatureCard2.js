import ButtonPrimary from "../buttons/ButtonPrimary";

const FeatureCard2 = ({ feature, idx }) => {
  const { icon, title, desc, color } = feature ? feature : {};
  return (
    <div
      className="choose-box style-2 right-swipe"
      style={{ background: color }}
    >
      <div className="choose-content">
        <div className="choose-icon">
          <i style={{color: "#fff"}} className={icon}></i>
        </div>
        <h4 className="title" style={{color: "#fff"}}>{title}</h4>
        <p className="desc" style={{color: "#fff"}}>{desc}</p>
        {/* <ButtonPrimary text={"Read More"} url={"/about"} isTextBtn={true} /> */}
      </div>
    </div>
  );
};

export default FeatureCard2;
