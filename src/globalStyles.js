import { createGlobalStyle, styled } from "styled-components";
import theme from "./utils/theme";

const GlobalStyles = createGlobalStyle`
   
   html {
    --color-primary: #0077ff;
    --color-secondary: #6665dde6;

    /* Typography */
    --font-family: system-ui;
    --font-size: 16px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Spacing */
    --spacing-unit: 1rem;
    --spacing-small: 0.5rem;
    --spacing-medium: 1rem;
    --spacing-large: 2rem;

    /* Borders */
    --border-radius: 0.25rem;

    /* Shadows */
    --box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
   }

    html.theme-light {
        --main-bg-color: ${theme.light["main-bg-color"]};
        --secondary-bg-color: ${theme.light["secondary-bg-color"]};
        --main-text-color: ${theme.light["main-text-color"]};
    }
    
    html.theme-dark {
        --main-bg-color: ${theme.dark["main-bg-color"]};
        --secondary-bg-color: ${theme.dark["secondary-bg-color"]};
        --main-text-color: ${theme.dark["main-text-color"]};
          background-color: var(--secondary-bg-color);
    }
  

  body {
 
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--color-text);
    
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    
    &.dark {
      color: var(--color-text-dark);
      background-color: var(--color-background-dark);
    }
    button,
  input[type="button"],
  input[type="submit"] {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight-bold);
    padding: 10px 20px;
    width:100px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--color-secondary);
      color: white;
    }
  }

 
  
`;

export const Container = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    max-width: 720px;
    max-width: 540px;
  }
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (max-width: 600px) {
    max-width: 540px;
    padding-right: var(--bs-gutter-x, 0rem);
    padding-left: var(--bs-gutter-x, 0rem);
  }
`;

export default GlobalStyles;
