import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
  const navItems = getNavItems();
  const homeNav = navItems[0];
  const pagesNav = navItems[1];
  const serviceNav = navItems[2];
  const portfolioNav = navItems[3];
  const blogNav = navItems[4];
  const contactNav = navItems[5];
  return (
    <div className="hamburger_menu">
      <div className="mobile_menu mean-container">
        <div className="mean-bar">
          <Link
            href="#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto" }}
          >
            <span>
              <span>
                <span></span>
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            <ul>
              <li className="mean-last">
                <Link href="/">Home</Link>
              </li>
              <li className="mean-last">
                <Link href="/whyus">Why Us</Link>
              </li>
              <li className="mean-last">
                <Link href="/Clients">Our Client</Link>
              </li>
              <li className="mean-last">
                <Link href="/portfolios">Portfolio</Link>
              </li>
              <li className="mean-last">
                <Link href="/Products">Our Products</Link>
              </li>
              <li className="mean-last">
                <Link href="/services">Services</Link>
              </li>
              <li className="mean-last">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
