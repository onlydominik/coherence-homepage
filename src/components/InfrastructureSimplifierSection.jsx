import Container from './Container.jsx';

export default function InfrastructureSimplifier() {
  return (
    <section className="">
      <Container>
        <h3 className="mb-12 text-center xl:text-start text-3xl xl:text-5xl xl:leading-tight text-infrastructureSimplifier-headingNormal">
          <span className="text-infrastructureSimplifier-headingMarked">
            Don’t build all this stuff yourself.
          </span>{' '}
          Coherence gets infrastructure work off your roadmap.
        </h3>
        <img
          width="800"
          height="800"
          className="w-full"
          src="./pictures/section/infrastructure-simplifier.webp"
          alt="Abstract representation of Coherence's infrastructure solutions."
          loading="lazy"
        />
      </Container>
    </section>
  );
}
