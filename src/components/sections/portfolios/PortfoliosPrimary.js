"use client";
import PortfolioCard3 from "@/components/shared/cards/PortfolioCard3";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getPortfolio from "@/libs/getPortfolio";
import makeWowDelay from "@/libs/makeWowDelay";
const PortfoliosPrimary = () => {
  const items = [
    {
      id: 1,
      title: "Journey World Vacations",
      img: "/images/project/P1.jpg",
      desc: "They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.",
      category: "Connect",
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
    <section className="tj-project-section section-gap">
      <div className="container">
        <div className="row row-gap-4">
          {currentItems?.length
            ? currentItems?.map((item, idx) => (
                <div
                  key={idx}
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay={makeWowDelay(idx, 0.1)}
                >
                  <PortfolioCard3 key={idx} portfolio={item} />
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
    </section>
  );
};

export default PortfoliosPrimary;
