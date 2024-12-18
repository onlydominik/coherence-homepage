import "./CardFeatureStyles.css";
export default function CardFeature({ heading, link, image }) {
  return (
    <article className="grid gap-4 font-light tracking-wider bg-bigFeature-bgCard bg-opacity-80 rounded-xl big-feature-card">
      <div className="flex flex-col gap-6">
        <h3 className="px-6 xl:px-10 pt-6 xl:pt-10 xl:text-3xl text-bigFeature-headingNormal opacity-90">
          <span className="text-bigFeature-headingMarked opacity-100">
            {heading.marked}{" "}
          </span>
          {heading.normal}
        </h3>
        <a
          className="flex gap-1 items-center w-fit mx-6 xl:mx-10 mb-1 xl:mb-8 font-extralight xl:text-lg text-bigFeature-accent hover:underline underline-offset-4"
          href={link}
          aria-label={`Learn more about ${heading.marked}`}>
          <span className="sr-only">Learn more about {heading.marked}</span>
          Learn more{" "}
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c2b8ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
      <img
        width="100%"
        height="100%"
        className="w-auto"
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </article>
  );
}
