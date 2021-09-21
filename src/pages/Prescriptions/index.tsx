/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { ReactNode, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserState } from '../../store/user/types';
import { AppState } from '../../store';

import { useMemed } from '../../hooks';

import { pacient as pacientMock } from '../../mocks/pacient';

import { Header } from '../../components/application';
import { List, ListItem, LoaderSpinner } from '../../components/ui';
import * as Icons from '../../components/ui/Icons';
import * as Styles from './styles';

interface PrescriptionsProps {
  children?: ReactNode;
}

function Prescriptions({ children }: PrescriptionsProps) {
  const { initMemed, definePacient, open } = useMemed();
  const { user } = useSelector<AppState, UserState>(state => state.userState);

  const [loading, setLoading] = useState(false);
  const [pacient, setPacient] = useState(pacientMock);

  useEffect(() => {
    if (user?.token) initMemed(user?.token);
  }, [user, initMemed]);

  if (!user?.token) {
    return <Redirect to="/" />;
  }

  const showMemed = () => {
    setLoading(true);

    definePacient(pacient).then(() => {
      open();
      setLoading(false);
    });
  };

  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Styles.Content>
          <Styles.User>
            <Icons.UserIcon width={80} height={80} />
          </Styles.User>
          <List>
            <ListItem label="Nome" value={pacient?.nome} />
            <ListItem label="Cidade" value={pacient?.cidade} />
            <ListItem label="Endereço" value={pacient?.endereco} />
            <ListItem label="Telefone" value={pacient?.telefone} />

            <Styles.Button
              type="button"
              aria-label="Prescrever com a Memed"
              onClick={() => showMemed()}
              disabled={loading}>
              {loading ? <LoaderSpinner size={20} /> : <Icons.LogoIcon />}

              <p>Prescrever com a Memed</p>
            </Styles.Button>
          </List>
        </Styles.Content>
      </Styles.Main>
    </Styles.Container>
  );
}

export default Prescriptions;
