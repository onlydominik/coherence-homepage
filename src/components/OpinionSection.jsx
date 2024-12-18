import { useContext } from "react";
import { pageDataContext } from "../context/PageData.context.jsx";
import logos from "/logos/logos-slide.png";
import Container from "./Container.jsx";
export default function OpinionSection() {
  const { isLoading, data, error } = useContext(pageDataContext);

  if (isLoading || error) return <div className="h-screen"></div>;

  return (
    <section className="text-balance bg-imageOpinionSection bg-cover bg-no-repeat bg-[top]">
      <Container paddingY="pt-24 pb-6">
        <div className="flex flex-col md:flex-row gap-10">
          {data.opinionSection.opinions.map((opinion) => {
            return (
              <div key={opinion.id}>
                <h3 className="font-extralight text-opinion-text">
                  <blockquote className="mb-2 md:mb-0 text-lg md:text-3xl text-opinion-accent">
                    &quot;{opinion.quote}&quot;.
                  </blockquote>
                  <p className="inline text-base md:text-3xl text-opinion-text">
                    {opinion.description}
                  </p>
                  <a
                    className="ml-2 text-base md:text-3xl text-nowrap border-b-2 border-dotted text-opinion-link opacity-60 hover:opacity-80"
                    href="">
                    Read More
                  </a>
                </h3>
                <div className="flex items-center gap-2 md:gap-4 mt-3 md:mt-8">
                  <img
                    width="40"
                    height="40"
                    className="w-10 md:w-12"
                    src={opinion.picture}
                    alt={`${opinion.author} profile picture`}
                    loading="lazy"
                  />
                  <div className="text-sm font-light text-opinion-text">
                    <p>{opinion.author}</p>
                    <img
                      width="40"
                      height="40"
                      className="w-[4.5rem] mt-1 md:mt-2 md:w-[5rem]"
                      src={opinion.company}
                      alt={`${opinion.company} logo`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mb-5 mt-20 font-light text-xs text-opinion-text opacity-60">
          Many more growing teams trust Coherence
        </p>
        <div className="relative mx-[-1rem] sm:mx-[-1.5rem] md:mx-0 overflow-hidden">
          <div className="flex items-center w-max md:w-full md:max-w-max animate-slide space-x-0 md:animate-none hover:pause">
            <img
              width="784"
              height="32"
              loading="lazy"
              className="px-4 md:px-0 md:w-full"
              src={logos}
              alt="Logos of companies that use Coherence's services."
            />
            <img
              width="784"
              height="32"
              loading="lazy"
              className="px-4 md:hidden"
              src={logos}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
