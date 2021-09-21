/* eslint-disable max-len */
import styled from 'styled-components';

import { ReactComponent as Illustration } from '../../assets/img/svg/background-2.svg';

export const HomeIllustration = styled(Illustration)`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;
`;

export const Aside = styled.aside`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px ${({ theme }: ThemeProps) => theme.spacing[10]};

  background: linear-gradient(25.44deg, ${({ theme }: ThemeProps) => theme.colors.primary.base} 45%, ${({ theme }: ThemeProps) => theme.colors.secondary.base} 99.89%);

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Title = styled.h1<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading1};
  color: ${({ theme }: ThemeProps) => theme.colors.white.base};
`;

export const Subtitle = styled.h6<ThemeProps>`
  ${({ theme }: ThemeProps) => theme.typography.heading6};
  color: ${({ theme }: ThemeProps) => theme.colors.white[70]};
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 ${({ theme }: ThemeProps) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    flex: 1;
    background: linear-gradient(139.44deg, ${({ theme }: ThemeProps) => theme.colors.primary.base} 0%, ${({ theme }: ThemeProps) => theme.colors.secondary.base} 96.19%);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  width: 100%;
  max-width: 320px;

  @media (max-width: 860px) {
    padding: ${({ theme }: ThemeProps) => theme.spacing[3]};
    border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.large};

    background: ${({ theme }: ThemeProps) => theme.colors.white.base};
    box-shadow: 0px 2px 12px ${(props: ThemeProps) => props.theme.colors.black[50]};
  }
`;
