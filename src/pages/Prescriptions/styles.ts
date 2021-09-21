/* eslint-disable max-len */
import styled from 'styled-components';

import { ButtonOutlined } from '../../components/ui';

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(25.44deg, ${({ theme }: ThemeProps) => theme.colors.primary.base} 25%, ${({ theme }: ThemeProps) => theme.colors.secondary[50]} 99.89%);
`;

export const Main = styled.main`
  height: calc(100% - 64px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }: ThemeProps) => theme.spacing[3]};
`;

export const Content = styled.div`
  background: ${({ theme }: ThemeProps) => theme.colors.white.base};
  width: 100%;
  max-width: 768px;
  padding: ${({ theme }: ThemeProps) => theme.spacing[3]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius.large};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }: ThemeProps) => theme.spacing[3]};
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  min-height: 200px;
  background: ${({ theme }: ThemeProps) => theme.colors.black[30]};
`;

export const Button = styled(ButtonOutlined)`
  margin-top: ${({ theme }: ThemeProps) => theme.spacing[2]} !important;
  width: 100% !important;
`;
