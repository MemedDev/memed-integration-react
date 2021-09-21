import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  padding: ${({ theme }: ThemeProps) => theme.spacing[1]};
  list-style: none;
  color: ${({ theme }: ThemeProps) => theme.colors.black.base};
  ${({ theme }: ThemeProps) => theme.typography.caption2};

  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.black['08']};

  &:first-child {
    border-top-left-radius: ${({ theme }: ThemeProps) => theme.borderRadius.base};
    border-top-right-radius: ${({ theme }: ThemeProps) => theme.borderRadius.base};
  }

  & strong {
    text-align: left;
    width: 70px;
  }
`;
