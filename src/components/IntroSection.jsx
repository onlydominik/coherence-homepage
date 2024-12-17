import Container from './Container.jsx';
import { Button } from './ui/Button.jsx';
import buttonIconDemo from '/icons/button-icon-demo.svg';
export default function IntroSection() {
  const spanClassName = 'text-main-accent';
  const buttonClassName = 'px-6';
  return (
    <>
      <main>
        <Container paddingY="pt-12">
          <div className="flex flex-col items-center gap-6 md:items-start text-center md:text-start text-balance">
            <h1 className="text-5xl md:text-8xl text-main-text">
              <span className={spanClassName}>Easy-mode</span> for
              <br />
              Cloud Deployment
            </h1>
            <h2 className="text-2xl font-extralight text-main-text">
              Coherence automates <span className={spanClassName}>preview environments</span>, CI/CD{' '}
              <span className={spanClassName}>pipelines</span> and{' '}
              <span className={spanClassName}>production</span>
              <br /> deployments in your{' '}
              <span>
                <img
                  width="27"
                  height="27"
                  loading="preload"
                  className="inline w-max"
                  src="/logos/logo-aws.svg"
                  alt="AWS Logo"
                />
                AWS
              </span>{' '}
              or{' '}
              <span>
                <img
                  width="27"
                  loading="preload"
                  height="27"
                  className="inline w-max"
                  src="/logos/logo-gcp.svg"
                  alt="GCP Logo"
                />
                GCP
              </span>{' '}
              account. More power, less hassle.
            </h2>
            <div className="flex flex-col sm:flex-row gap-2.5 text-sm">
              <Button addClassName={buttonClassName} variant="primary">
                Try a sandbox
              </Button>
              <Button
                addClassName={buttonClassName}
                icon={buttonIconDemo}
                iconWidth="66"
                iconHeight="38"
                variant="accent"
              >
                Watch the demo
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <picture className="block mt-10 xl:mt-24 min-h-20">
        <source
          srcSet="/pictures/section/intro-main-mobile.webp"
          media="(max-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet="/pictures/section/intro-main.webp"
          media="(min-width: 769px)"
          type="image/webp"
        />
        <source srcSet="/pictures/section/intro-main-mobile.png" media="(max-width: 48rem)" />
        <source srcSet="/pictures/section/intro-main.png" media="(min-width: 48.0625rem)" />
        <img
          width="1280"
          height="714"
          loading="preload"
          src="/pictures/section/intro-main.png"
          alt="Coherence overview feature"
        />
      </picture>
    </>
  );
}
