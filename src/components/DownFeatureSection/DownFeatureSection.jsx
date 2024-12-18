import DownFeatureCard from "./DownFeatureCard.jsx";
import { useContext } from "react";
import { pageDataContext } from "../../context/PageData.context.jsx";
import Container from "../Container";
export default function DownFeatureSection() {
  const { isLoading, data, error } = useContext(pageDataContext);
  if (isLoading || error) return <div className="h-10"></div>;
  return (
    <section className="xl:mt-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.downFeatureSection.map((feature) => {
            return <DownFeatureCard key={feature.id} {...feature} />;
          })}
        </div>
      </Container>
    </section>
  );
}
