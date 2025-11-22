"use client";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	const handleSelect = option => {};
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel Free to Get in Touch or Visit our Location.
							</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input type="text" name="cfName" />
											<label className="cf-label">
												Full Name <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input type="email" name="cfEmail" />
											<label className="cf-label">
												Email Address <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input type="tel" name="cfPhone" />
											<label className="cf-label">
												Phone number <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Chose a option" },
															{ value: "1", optionName: "Business Strategy" },
															{ value: "2", optionName: "Customer Experience" },
															{
																value: "3",
																optionName: "Sustainability and ESG",
															},
															{
																value: "4",
																optionName: "Training and Development",
															},
															{
																value: "5",
																optionName: "IT Support & Maintenance",
															},
															{
																value: "6",
																optionName: "Marketing Strategy",
															},
														]}
														getSelectedOption={handleSelect}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea name="cfMessage" id="message"></textarea>
											<label className="cf-label">
												Type message <span>*</span>
											</label>
										</div>
									</div>
									<div className="submit-btn">
										<button className="tj-primary-btn" type="submit">
											<span className="btn-text">
												<span>Submit Now</span>
											</span>
											<span className="btn-icon">
												<i className="tji-arrow-right-long"></i>
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2105466261214!2d76.62482587379856!3d12.301603329215782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7abaae3db01d%3A0x871e15d751f9a5d9!2sVeriteam%20Software!5e0!3m2!1sen!2sin!4v1763814978788!5m2!1sen!2sin"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
