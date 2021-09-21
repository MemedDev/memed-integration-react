import styled from 'styled-components';

import { IconButton as IconButtonMUI } from '@material-ui/core';

interface IconButtonProps extends ThemeProps {
  width?: string;
  height?: number;
  padding?: number;
  border_radius?: string;
}

export const IconButton = styled(IconButtonMUI)<IconButtonProps>`
  &.MuiButtonBase-root {
    width: ${({ theme, width }: IconButtonProps) => width || theme.spacing[4]};
    height: ${({ theme, height }: IconButtonProps) => (height ? `${height}px` : theme.spacing[4])};
    padding: ${({ theme, padding }: IconButtonProps) => (padding ? `${padding}px` : theme.spacing.small)};
    transition: ${({ theme }: IconButtonProps) => theme.transitions.easeInOut.base};
    border-radius: ${({ border_radius }: IconButtonProps) => border_radius || '50%'};

    &:hover {
      transition: ${({ theme }: IconButtonProps) => theme.transitions.easeInOut.base};
    }
    .MuiIconButton-label {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
