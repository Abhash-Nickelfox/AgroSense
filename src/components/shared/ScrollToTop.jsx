import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation the way a full
 * page load does — without this, clicking a link while scrolled down on one
 * page lands you at that same scroll depth on the next page. This resets to
 * the top on every route change, except when the URL includes a hash (an
 * anchor link, which should scroll to that section instead).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
