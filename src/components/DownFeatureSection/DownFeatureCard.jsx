export default function DownFeatureCard({ heading, description, image }) {
  return (
    <article className="grid gap-1">
      <img
        width="41"
        height="41"
        src={image}
        className="mb-4 max-w-[3rem] bg-[#1F1C26] rounded "
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <h3 className="text-2xl text-downFeature-heading">{heading}</h3>
      <p className="font-light leading-relaxed text-downFeature-normal">
        {description}
      </p>
    </article>
  );
}
