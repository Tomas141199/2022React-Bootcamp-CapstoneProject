import { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const LazyLoad = styled.img`
  &.loading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s ${Shine} linear infinite;
  }
`;

const LazyImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = () => {
    setIsLoading(false);
  };

  return (
    <LazyLoad
      src={src}
      alt={alt}
      onLoad={loadImage}
      className={`${isLoading ? "loading" : ""}`}
    />
  );
};

export default LazyImage;
