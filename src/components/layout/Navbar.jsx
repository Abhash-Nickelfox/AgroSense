import { Link } from "react-router-dom";
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-primary/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300 ease-in-out border-b-0">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight"
        >
          AgroSense
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={
                activeId === link.id
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1 text-body-md font-body-md"
                  : "text-on-surface-variant hover:text-secondary hover:font-bold hover:border-b-2 hover:border-secondary pb-1 transition-colors text-body-md font-body-md"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            to="/discuss"
            className="bg-primary text-white px-6 py-2 rounded-lg font-body-md hover:bg-on-primary-fixed-variant transition-colors hover:opacity-80 shadow-sm"
          >
            Let's Discuss
          </Link>
        </div>
        <button className="md:hidden text-primary">
          <Icon name="menu" fill />
        </button>
      </div>
    </nav>
  );
}
