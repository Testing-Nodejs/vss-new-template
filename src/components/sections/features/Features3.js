import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "Key Advantages & Reasons to Choose Veriteam",
			icon: "fas fa-rocket",
			desc: "Unmatched Expertise & Experience: A team of skilled professionals with deep industry knowledge and technical proficiency, ensuring top-notch solutions tailored to your business needs.",
		},
		{
			id: 2,
			title: "What We Do",
			icon: "fas fa-cogs",
			desc: "Veriteam Software Solutions delivers end-to-end digital services — from custom web design to enterprise-grade, scalable applications. We blend domain expertise with advanced technologies to build solutions that are efficient, secure, and aligned with your business goals.",
		},
		{
			id: 3,
			title: "Our Team",
			icon: "fas fa-users ",
			desc: "A young, talented, and experienced group driven by confidence, competence, and care. We grow with our clients through long-term relationships, global exposure, and continuous innovation.",
		},
		{
			id: 3,
			title: "Why Veriteam Software?",
			icon: "fas fa-bullseye",
			desc: "We combine business understanding with technical excellence, offering solutions that are high-quality, cost-effective, scalable, and future-ready.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div
						className="col-lg-4 col-md-6 order-lg-0 order-1 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<FeatureCard3 feature={features[1]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-1 order-0">
						<div className="h4-content-wrap text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best Services
								</span>
								<h2 className="sec-title title-anim">
									Discover Why Businesses Choose Us.
								</h2>
							</div>
							<a
								className="tj-primary-btn wow fadeInUp"
								data-wow-delay=".5s"
								href="about.html"
							>
								<span className="btn-text">
									<span>Our Services</span>
								</span>
								<span className="btn-icon">
									<i className="tji-arrow-right-long"></i>
								</span>
							</a>
						</div>
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-2 order-2  wow fadeInUp"
						data-wow-delay=".3s"
					>
						<FeatureCard3 feature={features[2]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-3 order-3 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<FeatureCard3 feature={features[3]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-4 order-4 wow fadeInUp"
						data-wow-delay=".7s"
					>
						<FeatureCard3 feature={features[0]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-5 order-5">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
							style={{
								backgroundImage: "url('/images/choose/choose-img.webp')",
							}}
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<div className="count-inner">
								<span className="count-text">Faster Growth</span>
								<FunfactSingle currentValue={8.5} symbol={"X"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features3;
