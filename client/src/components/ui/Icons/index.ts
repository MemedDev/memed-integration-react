import styled, { css } from 'styled-components';

import { CgLogIn } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';
import { RiListSettingsLine } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';

import { ReactComponent as Logo } from '../../../assets/img/svg/logo.svg';
import { ReactComponent as User } from '../../../assets/img/svg/user.svg';
import { ReactComponent as MentalHealth } from '../../../assets/img/svg/mental-health.svg';

interface IconProps {
  width?: number;
  height?: number;
  margin_top?: number;
  margin_bottom?: number;
  fill?: string;
}

const iconCSS = css`
  fill: ${({ fill }: IconProps) => fill || 'auto'};
  width: ${({ width }: IconProps) => width || 25}px;
  height: ${({ height }: IconProps) => height || 25}px;

  margin-top: ${({ margin_top }: IconProps) => margin_top || 0}px;
  margin-bottom: ${({ margin_bottom }: IconProps) => margin_bottom || 0}px;
`;

export const LogoIcon = styled(Logo)<IconProps>`
  ${iconCSS}
`;

export const SettingsIcon = styled(RiListSettingsLine)<IconProps>`
  ${iconCSS}
`;

export const LogOutIcon = styled(BiExit)<IconProps>`
  ${iconCSS}
`;

export const LoginIcon = styled(CgLogIn)<IconProps>`
  ${iconCSS}
`;

export const CloseIcon = styled(IoMdClose)<IconProps>`
  ${iconCSS}
`;

export const EndRoomIcon = styled(ImCancelCircle)<IconProps>`
  ${iconCSS}
`;

export const UserIcon = styled(User)<IconProps>`
  ${iconCSS}
`;

export const MentalHealthIcon = styled(MentalHealth)<IconProps>`
  ${iconCSS}
`;
