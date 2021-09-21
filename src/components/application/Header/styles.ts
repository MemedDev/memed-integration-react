import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }: ThemeProps) => theme.spacing[1]} ${({ theme }: ThemeProps) => theme.spacing[2]};
`;

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({ theme }: ThemeProps) => theme.spacing[1]};
  margin: 0;
  position: relative;

  .dropdown-menu {
    position: absolute;
    right: 0;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  list-style: none;
  position: relative;
  padding: ${({ theme }: ThemeProps) => theme.spacing[1]} ${({ theme }: ThemeProps) => theme.spacing[2]};
  color: ${({ theme }: ThemeProps) => theme.colors.black[90]};
  transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.base};
  margin: 0 ${({ theme }: ThemeProps) => theme.spacing[1]};

  ${({ theme }: ThemeProps) => theme.typography.caption1};

  &.active {
    color: ${({ theme }: ThemeProps) => theme.colors.white.base};
    font-weight: 600;
  }

  &:hover {
    background: ${({ theme }: ThemeProps) => theme.colors.white.base};
    color: ${({ theme }: ThemeProps) => theme.colors.primary.base};
    transition: ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
  }
`;
