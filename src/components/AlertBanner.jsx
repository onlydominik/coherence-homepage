import { useContext } from "react";
import { pageDataContext } from "../context/PageData.context.jsx";
import Container from "./Container.jsx";

export default function AlertBanner() {
  const { isLoading, data, error } = useContext(pageDataContext);

  if (isLoading || error) return <div className="h-10"></div>;

  const { tag, content } = data.alertBanner || { tag: "", content: "" };
  if (tag === "" && content === "") return null;

  return (
    <div className="text-alertBanner-text bg-alertBanner-bg">
      <Container paddingY="py-0">
        <a className="flex items-center justify-center gap-3 py-2" href="">
          <div className="px-[0.5rem] pt-[0.1rem] pb-[0.15rem] rounded text-sm text-alertBanner-tag-text bg-alertBanner-tag-bg">
            {tag}
          </div>
          <p className="text-sm xl:text-[0.9rem]">{content}</p>
        </a>
      </Container>
      <div className="h-8 md:h-12 rounded-t-[1.2rem] md:rounded-t-[2.5rem] bg-alertBanner-text"></div>
    </div>
  );
}
