import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 13px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/RobotoMono-Italic-VariableFont_wght.ttf");
  }
`;
