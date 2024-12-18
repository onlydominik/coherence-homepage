import Container from "./Container.jsx";

export default function BenefitCopySection() {
  return (
    <div className="xl:mt-36 xl:mb-10 text-center md:text-start">
      <Container>
        <h3 className="mb-2 md:mb-7 text-3xl md:text-5xl font-extralight text-benefitCopy-heading">
          DevOps is never &bdquo;done.&quot;
        </h3>
        <p className="xl:w-1/2 font-extralight text-base md:text-xl leading-5 text-benefitCopy-text">
          From managing multiple tools and frameworks, to keeping track of the
          latest updates and patches, there&apos;s always something that needs
          your attention, taking time away from building a successful product.
        </p>
      </Container>
    </div>
  );
}
