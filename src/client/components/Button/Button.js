import React from "react";
import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";

const Btn = styled.button`
  cursor: pointer;

  ${({ btnType }) => {
    switch (btnType) {
      case "primary":
        return css`
          color: #ffffff;
          background-color: #4a96ff;
          border-radius: 4px;
        `;
      default:
        return css`
          color: #ffffff;
          background-color: transparent;
          border: 1.5px solid $fff;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          height: 35px;
          font-size: 10px;
          padding: 0px 10px;
        `;
      case "md":
        return css`
          font-size: 16px;
          font-weight: 500;
          line-height: 19.36px;
          padding: 12px 0px;
        `;
      case "lg":
        return css`
          height: 60px;
          font-size: 30px;
          padding: 0px 20px;
        `;
    }
  }}
  ${({ animation }) => {
    switch (animation) {
      case "projection":
        return css`
          border: 0 solid;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0);
          outline: 1px solid;
          outline-color: rgba(0, 0, 0, 0.5);
          outline-offset: 0px;
          text-shadow: none;
          transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
          color: #000;
          &:hover {
            border: 1px solid;
            box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 20px rgba(0, 0, 0, 0.2);
            outline-color: rgba(0, 0, 0, 0);
            outline-offset: 15px;
          }
        `;
      case "shine":
        return css`
          border: 1px solid;
          overflow: hidden;
          position: relative;
          span {
            z-index: 20;
          }
          &:after {
            background: #ffffff;
            content: "";
            height: 155px;
            left: -75px;
            opacity: 0.2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            width: 50px;
            z-index: -10;
          }
          &:hover:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
          }
        `;
      default:
        return css``;
    }
  }}
`;

const Button = (props) => {
  const { ...rest } = props;
  return <Btn {...rest} />;
};

Button.propTypes = {
  animation: PropTypes.string,
  btnType: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
};

Button.defaultProps = {
  animation: "default",
  btnType: "default",
  size: "md",
  type: "button",
};

export default Button;
