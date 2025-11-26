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
      img: "/images/project/P1.png",
      desc: "They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.",
      category: "VSS-Portfolio",
      link: "https://journeyworldvacations.in/",
    },
    {
      id: 2,
      title: "Bhavani Associates",
      img: "/images/project/P2.png",
      desc: "Bhavani Associates started with consulting and financial accounting automation",
      category: "VSS-Portfolio",
      link: "https://www.bhavaniassociates.com/",
    },
    {
      id: 3,
      title: "Foundations Mysore",
      img: "/images/project/P3.png",
      desc: "Foundations, can manage your build schedule from the planning stage right through to a sucessful, quality finish, making the whole process as stress-free as possible for you.",
      category: "VSS-Portfolio",
      link: "https://foundationsmysore.com/",
    },
    {
      id: 4,
      title: "Zeus Biotech",
      img: "/images/project/P4.png",
      desc: "Zeus Biotech produced the world's FIRST feed specific synergistically acting enzyme supplement POLYZYME from a single substrate",
      category: "VSS-Portfolio",
      link: "https://www.zeusbiotech.com/",
    },
    {
      id: 5,
      title: "Seramey Monastery",
      img: "/images/project/P5.png",
      desc: "Just as finding the source of a river should lead us to a mountain, the history of the Buddha Dharma should also lead us to it’s origin, the Buddha Shakyamuni, our sublime teacher with exceptional compassion for the beings of the Five Degenerations",
      category: "VSS-Portfolio",
      link: "https://www.serameymonastery.org/",
    },
    {
      id: 6,
      title: "National Residency",
      img: "/images/project/P6.png",
      desc: "A New Landmark that has Surfaced at Mysore with 37 well decorated and furnished with International Standards and Equipped with best of Amenities which provide quality service within reach of a common man.",
      category: "VSS-Portfolio",
      link: "https://nationalresidency.in/",
    },
    {
      id: 7,
      title: "Sarada Vilas College",
      img: "/images/project/P7.png",
      desc: "Sarada Vilas College, located in the heart of the beautiful and heritage city of Mysore, was established in the year 1945 as an Intermediate college.",
      category: "VSS-Portfolio",
      link: "https://www.saradavilas.com/",
    },
  ];
  const limit = 8;
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
