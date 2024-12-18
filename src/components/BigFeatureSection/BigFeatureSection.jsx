import Container from "../Container.jsx";
import CardFeature from "./CardFeature.jsx";
import { useContext } from "react";
import { pageDataContext } from "../../context/PageData.context.jsx";
export default function BigFeatureSection() {
  const { isLoading, data, error } = useContext(pageDataContext);
  if (isLoading || error) return <div className="h-8"></div>;

  return (
    <div className="xl:mb-12">
      <Container>
        <h3 className="xl:w-3/4 mb-12 text-3xl xl:text-5xl text-center xl:text-start text-balance xl:leading-tight text-bigFeature-headingMarked">
          <span className="text-bigFeature-accent">
            Your internal developer platform is here.
          </span>{" "}
          Your team will love using it. You&apos;ll love not building,
          supporting, or maintaining it.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 xl:gap-14 ">
          {data.bigFeatureSection.map((feature) => {
            return <CardFeature key={feature.id} {...feature} />;
          })}
        </div>
      </Container>
    </div>
  );
}
