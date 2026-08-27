import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../shared/Icon";
import useActiveSection from "../../hooks/useActiveSection";

const LINKS = [
  { href: "/#overview", id: "overview", label: "Overview" },
  { href: "/#challenge", id: "challenge", label: "Challenge" },
  { href: "/#solution", id: "solution", label: "Solution" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#impact", id: "impact", label: "Impact" },
];

const SECTION_IDS = LINKS.map((link) => link.id);

export default function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);
  const [hoveredId, setHoveredId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const highlightedId = hoveredId ?? activeId;
  const { pathname, hash } = useLocation();

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-primary/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300 ease-in-out border-b-0">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight"
        >
          AgroSense
        </Link>
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={
                highlightedId === link.id
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1 text-body-md font-body-md whitespace-nowrap"
                  : "text-on-surface-variant border-b-2 border-transparent pb-1 transition-colors text-body-md font-body-md whitespace-nowrap"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link
            to="/discuss"
            className="bg-primary text-white px-6 py-2 rounded-lg font-body-md hover:bg-on-primary-fixed-variant transition-colors hover:opacity-80 shadow-sm whitespace-nowrap"
          >
            Let's Discuss
          </Link>
        </div>
        <button
          type="button"
          className="lg:hidden text-primary dark:text-primary-fixed"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} fill />
        </button>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-surface dark:bg-primary border-t border-outline-variant/20 ${
          mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile md:px-margin-desktop py-6 gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={
                activeId === link.id
                  ? "text-secondary font-bold py-3 text-body-md font-body-md border-b border-outline-variant/20"
                  : "text-on-surface-variant py-3 text-body-md font-body-md border-b border-outline-variant/20"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/discuss"
            className="bg-primary text-white px-6 py-3 rounded-lg font-body-md hover:opacity-80 transition-opacity shadow-sm text-center mt-4"
          >
            Let's Discuss
          </Link>
        </div>
      </div>
    </nav>
  );
}
