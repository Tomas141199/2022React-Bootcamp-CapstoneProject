import styled from "@emotion/styled";

const FrameContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 500px) {
    width: 400px;
  }
`;

const Frame = styled.img`
  width: 100%;
`;

const Error404 = () => {
  return (
    <FrameContainer>
      <Frame src="/assets/error.gif" alt="error" />
    </FrameContainer>
  );
};

export default Error404;
