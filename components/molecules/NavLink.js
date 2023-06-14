import { useState, useEffect } from "react";

const NavLink = ({ children, target }) => {
  const [isActive, setIsActive] = useState(false);
  const headerHeight = 92;
  useEffect(() => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      if (target === "#hero") {
        setIsActive(true);
      }
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + headerHeight >
            targetElement.offsetTop - headerHeight &&
          window.scrollY <
            targetElement.offsetTop +
              targetElement.clientHeight -
              headerHeight -
              24
        ) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }
  }, [target]);
  return (
    <li>
      <a
        itemProp="url"
        href={target}
        className={`text-poppins text-xl transition-all duration-300 ${
          isActive
            ? "font-semibold text-kuning dark:text-kuning"
            : "text-white dark:text-white dark:hover:text-kuning"
        } hover:text-kuning`}
        onClick={(e) => {
          e.preventDefault();
          if (document && window) {
            const targetElement = document.querySelector(target);
            if (targetElement) {
              window.scrollTo(0, targetElement.offsetTop - headerHeight);
            }
          }
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;