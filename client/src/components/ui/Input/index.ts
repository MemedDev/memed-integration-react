import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { TextField, InputAdornment as InputAdornmentMUI } from '@material-ui/core';

interface InputProps extends ThemeProps, InputHTMLAttributes<HTMLInputElement> {
  height?: number;
}

export const Input = styled(TextField)<InputProps>`
  width: 100%;
  transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
  color: ${({ theme }: InputProps) => theme.colors.primary.base};

  &:hover label {
    color: ${({ theme }: InputProps) => theme.colors.primary.base};
  }

  .MuiInputBase-root {
    border-radius: ${({ theme }: InputProps) => theme.borderRadius.base};
    height: ${({ height }: InputProps) => height || 50}px;
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};

    textarea {
      min-height: ${({ height }: InputProps) => height || 50}px;
      max-height: ${({ height }: InputProps) => height || 50}px;
      overflow-y: auto !important;
    }
  }

  .MuiOutlinedInput-root {
    border-width: 1px !important;
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};

    &:hover fieldset {
      border-width: 1px !important;
      border-color: ${({ theme }: InputProps) => theme.colors.primary.base};
      transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
    }

    &:focus fieldset {
      border-width: 1px !important;
      border-color: ${({ theme }: InputProps) => theme.colors.primary.base};
      transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
    }

    & fieldset {
      border-width: 1px !important;
      transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
      border-color: ${({ theme }: InputProps) => theme.colors.black[40]};
    }

    &.Mui-focused fieldset {
      border-width: 1px !important;
      border: 1px solid ${({ theme }: InputProps) => theme.colors.primary.base};
      transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
    }
  }

  .MuiOutlinedInput-adornedEnd {
    padding-right: 0px;
  }

  .MuiInput-underline.Mui-error:after {
    border-bottom-color: ${({ theme }: InputProps) => theme.colors.danger.base};
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
  }

  .MuiFormHelperText-root {
    border: 0 !important;
    position: absolute;
    bottom: 0;
    font-size: 12px !important;
  }

  .MuiInputBase-input {
    height: 20px;
    font-size: 14px;
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
    color: ${({ theme }: InputProps) => theme.colors.black[70]};
  }

  .MuiInputLabel-outlined {
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
  }

  & label.Mui-focused {
    margin-top: -5px;
    color: ${({ theme }: InputProps) => theme.colors.primary.base};
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
  }

  & label.MuiFormLabel-filled {
    margin-top: -5px;
    transition: ${({ theme }: InputProps) => theme.transitions.easeInOut.base};
  }
`;

interface InputAdornmentProps extends ThemeProps {
  height?: number;
}

export const InputAdornment = styled(InputAdornmentMUI)<InputAdornmentProps>`
  &.MuiInputAdornment-root {
    height: ${({ height }: InputAdornmentProps) => height || 50}px;
    cursor: pointer;
    margin-right: ${({ theme }: InputAdornmentProps) => theme.spacing[2]};
    transition: ${({ theme }: InputAdornmentProps) => theme.transitions.easeInOut.base};

    svg {
      transition: ${({ theme }: InputAdornmentProps) => theme.transitions.easeInOut.base};
    }

    &:hover svg {
      transition: ${({ theme }: InputAdornmentProps) => theme.transitions.easeInOut.base};
      fill: ${({ theme }: InputAdornmentProps) => theme.colors.primary.base};
    }
  }
`;
