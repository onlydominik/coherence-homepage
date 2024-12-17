import Container from './Container.jsx';
import MenuDropdown from './MenuDropdown.jsx';
import useDropdownMenu from '../hooks/useToggleDropdown.jsx';
import { BurgerButton } from './ui/BurgerButton/BurgerButton.jsx';
import { Button } from './ui/Button.jsx';
export default function Header() {
  const linkClassName = 'hover:text-header-hover-text';
  const { isDropdownOpen, toggleDropdown, menuRef, buttonRef } = useDropdownMenu();

  return (
    <header className="relative text-sm bg-header-bg text-header-text">
      <Container paddingY="pt-0 pb-2" className="flex justify-between items-center">
        <a href="">
          <img
            loading="preload"
            width="144"
            height="36"
            className="w-[9rem]"
            src="/logos/logo.svg"
            alt="Logo of Coherence"
          />
        </a>

        <div className="flex items-center gap-2">
          <BurgerButton
            ref={buttonRef}
            onClick={toggleDropdown}
            isActive={isDropdownOpen}
            fill="#F4F2F0"
            width="2.5rem"
          />
          <nav className="hidden md:block mr-4 font-extralight text-md">
            <ol className="flex items-center gap-8">
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
                <svg
                  className="opacity-30"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_42321)">
                    <path
                      d="M5.08008 0C5.08008 2.76143 7.31868 5 10.0801 5C7.31868 5 5.08008 7.2386 5.08008 10C5.08008 7.2386 2.84151 5 0.0800781 5C2.84151 5 5.08008 2.76143 5.08008 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_42321">
                      <rect width="10" height="10" fill="white" transform="translate(0.0800781)" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li>
                <a className={linkClassName} href="#login">
                  Login
                </a>
              </li>
            </ol>
          </nav>
          <Button addClassName="hidden xs:block h-auto text-sm" variant="accent">
            Create an app
          </Button>
          <Button addClassName="hidden sm:block h-auto text-sm" variant="primary">
            Book a demo
          </Button>
        </div>
      </Container>
      <MenuDropdown ref={menuRef} className="md:hidden" isOpen={isDropdownOpen} />
    </header>
  );
}
