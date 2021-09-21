import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  *, button, input {
    font-family: Roboto, sans-serif;
    outline: none !important;
  }

  body {
    background: ${({ theme }: ThemeProps) => theme.colors.background.base};
    color: ${({ theme }: ThemeProps) => theme.colors.black.base};
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }: ThemeProps) => theme.colors.black[60]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }: ThemeProps) => theme.colors.black[30]};
    border-radius: 4px;
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }: ThemeProps) => theme.colors.black[90]};
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }

  a {
    transition: filter ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover{
    transition: filter ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    filter: brightness(1.2);
    outline: none;
  }
`;
