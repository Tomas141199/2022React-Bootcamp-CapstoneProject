import { ArrowRight } from "../../icons";
import { CardContainer, CategorieLabel, CategorieLink } from "./styled";
import { types } from "./proptypes";
import { LazyImage } from "../../ui";

const CategorieCard = ({ id, name, alt, urlImage, slugs }) => {
  return (
    <CardContainer>
      <CategorieLabel
        className="__animated-label"
        to={`products?category=${slugs[0]}+${id}`}
      >
        {name}
      </CategorieLabel>
      <CategorieLink
        className="__animated-link"
        to={`products?category=${slugs[0]}+${id}`}
      >
        See all <ArrowRight />
      </CategorieLink>
      <LazyImage src={urlImage} alt={alt} />
    </CardContainer>
  );
};

CategorieCard.propTypes = types;

export default CategorieCard;
