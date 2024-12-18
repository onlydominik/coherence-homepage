export default function PurpleSlide() {
  return (
    <div className="relative h-[20rem] max-w-[86rem] mx-auto xl:mb-32">
      <div className="w-full h-full bg-imagePurpleSlideSection bg-cover xl:bg-contain bg-center bg-no-repeat"></div>
      <div className="absolute h-full w-[2rem] bg-gradient-to-r from-container-bg top-0"></div>
      <div className="absolute h-full w-[2rem] bg-gradient-to-l from-container-bg top-0 right-0"></div>
    </div>
  );
}
