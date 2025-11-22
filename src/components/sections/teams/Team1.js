"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard from "@/components/shared/cards/TeamCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getTeamMembers from "@/libs/getTeamMembers";

const Team1 = ({ type }) => {
  const items = getTeamMembers();
  const limit = type === 2 ? 8 : 24;
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
    <section
      className={` ${
        type === 2
          ? "tj-team-section section-gap"
          : type === 3
          ? "tj-team-section-3 section-gap section-gap-x"
          : "tj-team-section section-separator"
      }`}
    >
      <div className="container">
        {type === 2 ? (
          ""
        ) : (
          <div className="row">
            <div className="col-12">
              <div
                className={`sec-heading text-center  ${
                  type === 3 ? "" : "style-2"
                }`}
                style={{ marginBottom: "0" }}
              >
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  {type === 3 ? <i className="tji-box"></i> : ""}
                  Meet Our Clients
                </span>
              </div>
              <p
                style={{
                  textAlign: "justify",
                  borderBottom: "1px solid #56a4a4",
                  paddingBottom: "2%",
                  marginBottom: "2%",
                }}
              >
                Our Clients page showcases a diverse portfolio of organizations
                that trust Veriteam Software Solutions as their technology and
                outsourcing partner. Featuring logos from multiple industries,
                the page reflects our credibility, expertise, and proven track
                record in delivering reliable IT, BPO, and digital
                transformation services. We work with clients of all sizes —
                from agile startups to established mid-sized companies and large
                enterprises. Over the years, Veriteam has partnered with
                organizations across sectors such as IT & Software, Finance,
                Healthcare, Retail, Consulting, Government, Education,
                Manufacturing, and more. Our client base spans both domestic and
                international markets, demonstrating our global service
                capability and consistent delivery standards. Each logo
                represents a strong collaboration built on transparency,
                quality, and long-term value. Whether it's end-to-end BPO
                support, IT services, or specialized project engagements, our
                partnerships highlight the trust major companies place in
                Veriteam for scalable and future-ready solutions.
              </p>
            </div>
          </div>
        )}

        <div className="row leftSwipeWrap">
          {currentItems?.length
            ? currentItems.map((item, idx) => (
                <div key={idx} className="col-lg-3 col-sm-6">
                  <TeamCard teamMember={item} />
                </div>
              ))
            : ""}
        </div>
        {type === 2 ? (
          ""
        ) : (
          <div
            className="team-btn d-md-none mt-40 text-center wow fadeInUp"
            data-wow-delay="0.9s"
          >
            <ButtonPrimary text={"More member"} url={"/team"} />
          </div>
        )}
        {type === 2 && totalItemsToShow < totalItems ? (
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
    </section>
  );
};

export default Team1;
