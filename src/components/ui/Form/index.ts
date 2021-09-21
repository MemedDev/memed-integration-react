import { FormHTMLAttributes } from 'react';
import styled from 'styled-components';

interface FormProps extends ThemeProps, FormHTMLAttributes<HTMLFormElement> {
  min_height?: number;
}

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  min-height: ${({ min_height }: FormProps) => min_height || 132}px;

  @media (max-width: 425px) {
    min-height: ${({ min_height }: FormProps) => min_height || 132}px;
  }
`;
