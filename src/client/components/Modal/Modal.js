import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
// import BodyScrollLock from "../../helpers/bodyScrollLock";

const ModalDiv = styled.div`
  z-index: 15;
`;

const LayoutDiv = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 8;
`;
const BackgroundWrapper = styled.div`
  max-height: 92vh;
  width: 100%;
  z-index: 9;
  bottom: 0;
  overflow-y: auto;
  ${({ full }) =>
    full &&
    css`
      max-height: 100vh;
      height: 100%;
      border-radius: 0;
    `}
  @media screen and (min-width: 768px) {
    max-height: inherit;
    border-radius: 10px;
    bottom: initial;
    margin: 0;
    height: auto;
    width: auto;
  }
`;
const HeaderWrapper = styled.div`
  padding: 24px 24px 15px;
  padding: 24px 24px 15px;
  border-bottom: 1px solid #ddd;
  @media (max-width: 767px) {
    padding: 16px;
  }
`;
const Typography = styled.p`
  margin: 0 0 0 30px;
  color: black;
  @media (max-width: 767px) {
    margin: 0 0 0 14px;
  }
`;
const ModalBody = styled.div`
  padding: 24px;
  ${({ className }) => {
    switch (className) {
      case "no-padding":
        return css`
          padding: 0;
        `;
    }
  }}
  @media (max-width: 767px) {
    ${({ withHeader }) =>
      withHeader
        ? css`
            padding: 16px;
          `
        : css`
            padding: 0;
          `}
    max-height: 100%;
    overflow: auto;
  }
`;

const Subtitle = styled.span`
  margin-left: auto;
`;

const Modal = ({
  onClose,
  show,
  size,
  children,
  title,
  subTitle,
  className,
  withHeader,
  full,
  ...rest
}) => {
  return (
    <ModalDiv className="pF l0 t0 w100 h100 dFA jcC peN">
      {/* {show && <BodyScrollLock />} */}
      <BackgroundWrapper
        className={`pA dF fdC peA ${className || ""}`}
        size={size}
        full={full}
        {...rest}
      >
        {withHeader && (
          <HeaderWrapper className="dFA">
            {title && (
              <Typography
                tagName="p"
                modifiers={["bold", "h3"]}
                className="pR Ell"
              >
                {title}
              </Typography>
            )}
            {subTitle && <Subtitle>{subTitle}</Subtitle>}
          </HeaderWrapper>
        )}
        <ModalBody withHeader={withHeader} className="oA">
          {children}
        </ModalBody>
      </BackgroundWrapper>
      <LayoutDiv className="pF l0 t0 w100 h100 peA" onClick={onClose} />
    </ModalDiv>
  );
};
Modal.propTypes = {
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  children: PropTypes.any,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.node,
  className: PropTypes.string,
  full: PropTypes.bool,
  withHeader: PropTypes.bool,
};

Modal.defaultProps = {
  size: "md",
  full: false,
  withHeader: true,
  show: false,
};
export default Modal;
