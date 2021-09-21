import styled from 'styled-components';

interface ContainerProps extends ThemeProps {
  height?: string;
  width?: number;
  flex?: number;
}

export const FlexContainer = styled.div<ContainerProps>`
  padding: 0 32px;
  flex: ${({ flex }: ContainerProps) => flex || 'initial'};
  width: ${({ width }: ContainerProps) => (width ? `${width}px` : 'auto')};
  height: ${({ height }: ContainerProps) => height || '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
