import React, { useState } from "react";
import { Label } from "./../../icons";
import { ProductActions } from "./../";
import { LazyImage } from "../../ui";

import {
  CardWrapper,
  CardHeader,
  CategoryLabel,
  CardBody,
  CardName,
  CardPrice,
} from "./styled";
import { types } from "./proptypes";

const ProductCard = React.memo(function ProductCard({ product }) {
  const { title, category, price, urlImage, alt } = product;
  const [activeClass, setActiveClass] = useState(false);

  const handleMouseEnter = () => {
    setActiveClass(true);
  };

  const handleMouseLeave = () => {
    setActiveClass(false);
  };

  return (
    <CardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader>
        <CategoryLabel>
          <Label fill="#a1c5cc" />
          {category}
        </CategoryLabel>
        <ProductActions activeClass={activeClass} product={product} />
        <LazyImage src={urlImage} alt={alt} />
      </CardHeader>
      <CardBody>
        <CardName>{title}</CardName>
        <CardPrice>${price}</CardPrice>
      </CardBody>
    </CardWrapper>
  );
});

ProductCard.propTypes = types;

export default ProductCard;
