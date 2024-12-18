import { forwardRef } from "react";
import Container from "./Container.jsx";
const MenuDropdown = forwardRef(({ isOpen, className }, ref) => {
  const linkClassName = "";
  return (
    <nav
      ref={ref}
      id="mobile-menu"
      className={`${className} ${
        isOpen ? "translate-y-0 " : "invisible translate-y-[-0.5rem] "
      } absolute w-full bg-menuDropdown-bg text-menuDropdown-text transition translate duration-[400ms] motion-reduce:transition-none`}>
      <Container paddingY="py-6">
        <ol className="grid gap-6">
          <li>
            <a className={linkClassName} href="#features">
              Features
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#docs">
              Docs
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#login">
              Login
            </a>
          </li>
        </ol>
      </Container>
    </nav>
  );
});
MenuDropdown.displayName = "MenuDropdown";
export default MenuDropdown;
