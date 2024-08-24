import { css } from "styled-components";

export const BorderRadius = css`
  --border-radius-100: 100px;
  --border-radius-50: 50px;
  --border-radius-48: 48px;
  --border-radius-24: 24px;
  --border-radius-20: 20px;
  --border-radius-16: 16px;
  --border-radius-12: 12px;
  --border-radius-10: 10px;
  --border-radius-8: 8px;
  --border-radius-6: 6px;
  --border-radius-4: 4px;
`;

export const ButtonSize = css`
  --button: 16px;
  --button-small: 14px;
`;

export const CommonStyles = css`
  .pR {
    position: relative;
  }
  .pA {
    position: absolute;
  }
  .pF {
    position: fixed;
  }
  .dF {
    display: flex;
  }
  .dG {
    display: grid;
  }
  .dB {
    display: block;
  }
  .fdR {
    flex-direction: row;
  }
  .fdrR {
    flex-direction: row-reverse;
  }
  .fdC {
    flex-direction: column;
  }
  .dFA {
    display: flex;
    align-items: center;
  }
  .aiC {
    align-items: center;
  }
  .aiB {
    align-items: baseline;
  }
  .aiFS {
    align-items: flex-start;
  }
  .jcC {
    justify-content: center;
  }
  .jcE {
    justify-content: end;
  }
  .jcfS {
    justify-content: flex-start;
  }
  .jcsB {
    justify-content: space-between;
  }
  .h100 {
    height: 100vh;
  }
  .cP {
    cursor: pointer;
  }
  .fwW {
    flex-wrap: wrap;
  }
  .oH {
    overflow: hidden;
  }
  .gap-8 {
    gap: 8px;
  }
  .gap-12 {
    gap: 12px;
  }
  .gap-16 {
    gap: 16px;
  }
  .gap-24 {
    gap: 24px;
  }
  .mT-16 {
    margin-top: 16px;
  }
  .mT-24 {
    margin-top: 24px;
  }
  .mT-32 {
    margin-top: 32px;
  }
  .mB-8 {
    margin-bottom: 8px;
  }
  .mB-16 {
    margin-bottom: 16px;
  }
  .mB-24 {
    margin-bottom: 24px;
  }
  .mB-32 {
    margin-bottom: 32px;
  }
  .mR-8 {
    margin-right: 8px;
  }
  .taC {
    text-align: center;
  }
  .wsNW {
    white-space: nowrap;
  }
  .toE {
    text-overflow: ellipsis;
  }
  .w100 {
    width: 100vw;
  }
  .t0 {
    top: 0px;
  }
  .b0 {
    bottom: 0px;
  }
  .r0 {
    right: 0px;
  }
  .l0 {
    left: 0px;
  }
  .wA {
    word-wrap: anywhere;
  }
  .hU {
    &:hover {
      text-decoration: underline;
    }
  }
`;
