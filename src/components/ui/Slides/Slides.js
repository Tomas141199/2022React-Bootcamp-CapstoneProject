import { LazyImage } from "../LazyImage";
import { Content, ContentTitle, ContentDescription } from "./styled";
const Slides = ({ data, currentSlide }) => {
  return (
    <>
      {data?.map((slide, index) => (
        <div
          className={`${index === currentSlide ? "slide current" : "slide"}`}
          key={`${slide.id}`}
        >
          {index === currentSlide && (
            <>
              <LazyImage src={slide.urlImage} alt={slide.title} />
              <Content>
                <ContentTitle>{slide.title}</ContentTitle>
                <ContentDescription>{slide.description}</ContentDescription>
              </Content>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Slides;
