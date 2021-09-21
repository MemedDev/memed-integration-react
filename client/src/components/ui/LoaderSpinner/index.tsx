import { CircularProgress } from '@material-ui/core';

import { colors } from '../../../styles/theme';

interface Props {
  color?: string;
  size?: number;
}

function LoaderSpinner({ color = colors.primary.base, size = 15 }: Props) {
  return <CircularProgress size={size} style={{ color }} />;
}

export default LoaderSpinner;
