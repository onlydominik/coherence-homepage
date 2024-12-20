import AlertBanner from "./components/AlertBanner.jsx";
import BenefitCopySection from "./components/BenefitCopySection.jsx";
import BigFeatureSection from "./components/BigFeatureSection/BigFeatureSection.jsx";
import Container from "./components/Container.jsx";
import DownFeatureSection from "./components/DownFeatureSection/DownFeatureSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import InfrastructureSimplifier from "./components/InfrastructureSimplifierSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import PurpleSlide from "./components/PurpleSlide.jsx";
import OpinionSection from "./components/OpinionSection.jsx";
import { PageDataContextProvider } from "./context/PageData.context.jsx";
function App() {
  return (
    <>
      <PageDataContextProvider>
        <Container
          paddingX=""
          paddingY=""
          maxWidth=""
          className="bg-container-bg">
          <AlertBanner />
          <Container
            paddingX=""
            paddingY=""
            className="xl:bg-imageIntroSection bg-no-repeat bg-lcp bg-[right_-4rem_top_-7rem]">
            <Header />
            <IntroSection />
          </Container>
          <OpinionSection />
          <BenefitCopySection />
          <PurpleSlide />
          <BigFeatureSection />
          <InfrastructureSimplifier />
          <DownFeatureSection />
          <Footer />
        </Container>
      </PageDataContextProvider>
    </>
  );
}

export default App;
