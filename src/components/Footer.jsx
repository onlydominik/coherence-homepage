import Container from "./Container.jsx";
import buttonIconDemo from "/icons/button-icon-demo.svg";
import { Button } from "./ui/Button.jsx";
export default function Footer() {
  const linkClassName = "w-fit hover:text-footer-headingNormal";
  const buttonClassName = "flex justify-center w-full px-5";
  return (
    <footer className="mt-10 xl:mt-32">
      <Container className="grid gap-8" paddingY="pb-2 md:pb-6 xl:pb-20">
        <h3 className="text-3xl md:text-5xl xl:text-7xl text-center md:text-start text-balance text-footer-headingNormal">
          <span className="text-footer-headingMarked">
            Get back to building your product.
          </span>{" "}
          Let Coherence handle the rest.
        </h3>
        <div className="flex flex-col md:flex-row gap-2 md:w-fit">
          <Button addClassName={buttonClassName} variant="primary">
            Try a sandbox
          </Button>
          <Button
            addClassName={buttonClassName}
            icon={buttonIconDemo}
            iconWidth="66"
            iconHeight="38"
            variant="accent">
            Watch the demo
          </Button>
        </div>
        <div className="xl:mt-4 text-footer-link">
          <div className="flex flex-col md:flex-row md:justify-end gap-2 text-sm">
            <h4 className="md:hidden font-medium text-xs text-footer-headingNormal">
              COMPANY
            </h4>
            <a className={linkClassName} href="">
              Twitter (X)
            </a>
            <a className={linkClassName} href="">
              LinkedIn
            </a>
            <a className={linkClassName} href="">
              Blog
            </a>
            <a className={linkClassName} href="">
              Jobs
            </a>
            <a className={linkClassName} href="">
              Terms of Use
            </a>
            <a className={linkClassName} href="">
              Privacy Policy
            </a>
            <div className="md:-order-1 mt-4 md:mr-auto md:mt-0 text-sm text-center text-footer-link cursor-default">
              © 2022 Coherence Technologies
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
