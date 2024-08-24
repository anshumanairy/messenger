import styled, { createGlobalStyle, css } from "styled-components";
import { BorderRadius, ButtonSize, CommonStyles } from "./common.js";
import { Gradients, BaseThemeColors } from "./colors.js";
import {
  FontStyle,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
} from "./typography.js";

export const Breakpoints = {
  mobileXS: 480,
  mobile: 768,
  tablet: 1024,
  laptop: 1200,
  desktop: 1440,
};

export const GlobalStyle = createGlobalStyle`
    ${CommonStyles}

    :root {
        ${BaseThemeColors}
        ${Gradients}
        ${BorderRadius}
        ${FontStyle}
        ${LetterSpacing}
        ${Font}
        ${ButtonSize}
        ${FontSize}
        ${FontWeight}
        ${LineHeight}
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: var(--body-font);
        letter-spacing: var(--letter-spacing);
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--bg-color);
        font-family: var(--body-font);
        color: var(--white);
    }
    a {
        text-decoration: none;
    }
    button {
        outline: 0;
        border: none;
        cursor: pointer;
    }
    input {
        border: 1px solid transparent;
        outline: none;
        letter-spacing: var(--letter-spacing);
    }
    input[type="checkbox"]{
        width: 20px;
        height: 20px;
        accent-color: var(--jds-base-bg);
    }
    /* Scrollbar Styling */
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background: #6d6d6d;
    }

    *,
    *:before,
    *:after {
        /* outline: 1px solid dodgerblue; // for debugging layout */
    }
    /* Remove Remove Arrows/Spinners */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
    input[type=checkbox]:indeterminate {
        content: "";
        display: block;
        color: white;
        width: 20px;
        height: 20px;
        background-color:var(--jds-base-bg);
        position: relative;
    }
    input[type=checkbox]:indeterminate::before {
        content: "";
        display: block;
        color: white;
        width: 20px;
        height: 20px;
        background-color:var(--jds-base-bg);
        border: 1px solid var(--border-light);
        border-radius: 4px;
    }
    input[type=checkbox]:indeterminate::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: solid white;
        border-width: 2px 0 0 0;
        position: absolute;
        top: 10px;
        left: 6px;
    }
`;
