import { forwardRef } from "react";
import "./BurgerButtonStyle.css";
export const BurgerButton = forwardRef(
  ({ isActive, fill = "", width = "3rem", onClick }, ref) => {
    return (
      <button
        ref={ref}
        className="burger md:hidden"
        onClick={onClick}
        aria-expanded={isActive}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu">
        <svg viewBox="0 0 100 100" width={width}>
          <rect
            className="line top"
            width="70"
            height="8"
            x="15"
            y="27"
            rx="5"
            fill={fill}></rect>
          <rect
            className="line middle"
            width="70"
            height="8"
            x="15"
            y="47"
            rx="5"
            fill={fill}></rect>
          <rect
            className="line bottom"
            width="70"
            height="8"
            x="15"
            y="67"
            rx="5"
            fill={fill}></rect>
        </svg>
      </button>
    );
  }
);
BurgerButton.displayName = "BurgerButton";
