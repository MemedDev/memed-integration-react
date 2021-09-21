import { useSelector, useDispatch } from 'react-redux';

import { resetState } from '../../../store/user/actions';
import { useMemed } from '../../../hooks';

import { UserState } from '../../../store/user/types';
import { AppState } from '../../../store';

import * as Icons from '../../ui/Icons';
import { DropdownMenu, MenuItem, ListItemIcon } from '../../ui';

import { colors } from '../../../styles/theme';
import * as Styles from './styles';

function Header() {
  const dispatch = useDispatch();

  const { logOut } = useMemed();
  const { user } = useSelector<AppState, UserState>(state => state.userState);

  const exit = () => {
    dispatch(resetState());
    logOut();
  };

  return (
    <Styles.Container>
      <Icons.MentalHealthIcon width={30} height={30} />
      <Styles.Menu>
        <Styles.Item>Prontuário Médico</Styles.Item>
        <Styles.Item>Agenda</Styles.Item>
        <Styles.Item>Resumos</Styles.Item>
        <Styles.Item className="active">Pacientes</Styles.Item>
        <DropdownMenu>
          {user && (
            <MenuItem onClick={() => exit()}>
              <ListItemIcon>
                <Icons.LogOutIcon width={20} height={20} fill={colors.primary.base} />
              </ListItemIcon>
              <span>Sair</span>
            </MenuItem>
          )}
        </DropdownMenu>
      </Styles.Menu>
    </Styles.Container>
  );
}

export default Header;
