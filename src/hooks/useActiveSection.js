import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Tracks which of the given section ids is currently scrolled into view,
 * so nav links can stay highlighted for the section the user is on —
 * not just on hover — until another section takes its place.
 *
 * Returns null when none of the sections exist in the DOM (e.g. on a
 * page other than Home) or none are currently in view.
 */
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      setActiveId(null);
      return;
    }

    const intersecting = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });
        // Multiple sections can report their intersection state in the same
        // callback batch; picking the first (in document/nav order) that's
        // currently intersecting avoids "last entry wins" races that could
        // otherwise leave a lower section highlighted while still at the top.
        const current = ids.find((id) => intersecting.get(id));
        if (current) setActiveId(current);
      },
      // Treat a section as "current" once it crosses a line just below
      // the fixed nav, and stop counting it once it's mostly scrolled past.
      { rootMargin: "-84px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, pathname]);

  return activeId;
}
