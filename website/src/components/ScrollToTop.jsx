
/**
 * Author: Martin Kululanga
 * Github: https://github.com/m2kdevelopments
 */

 import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Method of scroll to the top of the page when a new page is loaded
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}