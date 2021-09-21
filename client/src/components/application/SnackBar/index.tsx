import { useSnackbar, SnackbarKey } from 'notistack';

import { IconButton } from '../../ui';
import { CloseIcon } from '../../ui/Icons';

interface Props {
  key?: SnackbarKey | undefined;
}

export function CloseButton({ key }: Props) {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton type="button" onClick={() => closeSnackbar(key)}>
      <CloseIcon width={15} height={15} fill="#fff" />
    </IconButton>
  );
}
