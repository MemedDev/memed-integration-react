import styled from 'styled-components';

export const Separator = styled.div<ThemeProps>`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }: ThemeProps) => theme.colors.black[40]};
  margin: ${({ theme }: ThemeProps) => theme.spacing[5]} 0;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }: ThemeProps) => theme.colors.black[40]};
    margin-right: ${({ theme }: ThemeProps) => theme.spacing[2]};
  }
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }: ThemeProps) => theme.colors.black[40]};
    margin-left: ${({ theme }: ThemeProps) => theme.spacing[2]};
  }
`;
