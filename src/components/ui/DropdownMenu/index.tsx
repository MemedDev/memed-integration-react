import { ReactNode, useState } from 'react';
import { Fade } from '@material-ui/core';

import * as Icons from '../Icons';
import { IconButton } from '../IconButton';

import * as Styles from './styles';
import { colors } from '../../../styles/theme';

interface Props {
  children?: ReactNode;
}

function DropdownMenu({ children }: Props) {
  const [open, setOpen] = useState(null);

  const handleClick = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => setOpen(null);

  return (
    <Styles.Container className="dropdown-menu">
      <IconButton aria-label="Menu" padding={6} width="32px" height={32} onClick={handleClick}>
        <Icons.SettingsIcon fill={open ? colors.primary.base : colors.black[60]} />
      </IconButton>
      <Styles.MenuContainer
        id="fade-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {children}
      </Styles.MenuContainer>
    </Styles.Container>
  );
}

export default DropdownMenu;
