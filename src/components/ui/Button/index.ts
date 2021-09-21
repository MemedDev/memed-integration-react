import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

interface ButtonProps extends ThemeProps, ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  color_scheme?: {
    accent: string;
    text: string;
  };
}

export const ButtonOutlined = styled(Button)<ButtonProps>`
  &.MuiButtonBase-root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: transparent;
    color: ${({ color_scheme, theme }: ButtonProps) => color_scheme?.accent || theme.colors.primary.base};
    border: 2px solid ${({ color_scheme, theme }: ButtonProps) => color_scheme?.accent || theme.colors.primary.base};

    text-transform: none;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0px 2px 12px ${({ theme }: ButtonProps) => theme.colors.black['08']};

    height: ${({ height }: ButtonProps) => height || 50}px;
    width: ${({ width }: ButtonProps) => (width ? `${width}px` : 'max-content')};
    border-radius: ${({ theme }: ButtonProps) => theme.borderRadius.base};

    outline: none;

    transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};

    font-size: 16px;

    svg + p {
      margin-left: ${({ theme }: ButtonProps) => theme.spacing[2]};
    }

    div + p {
      margin-left: ${({ theme }: ButtonProps) => theme.spacing[2]};
    }

    span,
    svg,
    p {
      transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
    }

    &:hover {
      background: ${({ color_scheme, theme }: ButtonProps) => color_scheme?.accent || theme.colors.primary.base};
      transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
      border-color: transparent;

      p,
      svg {
        transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
        color: ${({ color_scheme, theme }: ButtonProps) => color_scheme?.text || theme.colors.white.base};
        fill: ${({ color_scheme, theme }: ButtonProps) => color_scheme?.text || theme.colors.white.base};
      }

      path {
        fill: ${({ color_scheme, theme }: ButtonProps) => (color_scheme ? color_scheme.text : theme.colors.white.base)};
      }
    }

    &:disabled {
      transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
      background: ${({ theme }: ButtonProps) => theme.colors.disabled.base};
      border: 2px solid ${({ theme }: ButtonProps) => theme.colors.black['12']};
      box-shadow: 0px 2px 12px ${({ theme }: ButtonProps) => theme.colors.black['08']};
      cursor: not-allowed;

      span,
      p,
      svg {
        transition: ${({ theme }: ButtonProps) => theme.transitions.easeInOut.base};
        color: ${({ theme }: ButtonProps) => theme.colors.disabled.text} !important;
      }
    }
  }

  @media (max-width: 596px) {
    &.MuiButtonBase-root {
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
      }
    }
  }
`;
