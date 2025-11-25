const FeatureCard3 = ({ feature, idx }) => {
	const { icon, title, desc, color } = feature ? feature : {};
	return (
		<div className="choose-box">
			<div className="choose-content">
				<div className="choose-icon">
					<i className={icon} style={{ color: color }}></i>
				</div>
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default FeatureCard3;
