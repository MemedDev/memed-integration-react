import { ReactNode, useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined, Separator, Input, Form, LoaderSpinner } from '../../components/ui';

import { authenticate } from '../../store/user/actions';

import { UserState } from '../../store/user/types';
import { AppState } from '../../store';

import * as Styles from './styles';

interface HomepageProps {
  children?: ReactNode;
}

function Homepage({ children }: HomepageProps) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { loading, user } = useSelector<AppState, UserState>(state => state.userState);

  const [search, setSearch] = useState<string>('806.739.020-72');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return;

    dispatch(authenticate(search, enqueueSnackbar));
  };

  if (user?.token) {
    return <Redirect to="/prescription" />;
  }

  return (
    <Styles.Container>
      <Styles.Aside>
        <Styles.HomeIllustration />
        <Styles.Title>Memed - Integração</Styles.Title>
        <Styles.Subtitle>Exemplo de integração com a Memed, utilizando React</Styles.Subtitle>
      </Styles.Aside>

      <Styles.Main>
        <Styles.Content>
          <RouterLink to="/">
            <Icons.LogoIcon width={150} height={71} />
          </RouterLink>
          <Separator>
            Pesquise pelo CRM, CPF ou ID do usuário <br />
            que deseja autenticar-se na Memed
          </Separator>
          <Form onSubmit={handleSubmit} min_height={140}>
            <Input
              name="room"
              type="text"
              label="Digite o CRM, CPF ou ID do usuário"
              aria-label="Digite o CRM, CPF ou ID do usuário"
              value={search}
              variant="outlined"
              onChange={e => {
                setSearch(e.target.value.trim());
              }}
              required
            />
            <ButtonOutlined type="submit" aria-label="Abrir integração" width={250} disabled={loading || !search}>
              {loading ? <LoaderSpinner size={20} /> : <Icons.LoginIcon />}
              <p>Entrar</p>
            </ButtonOutlined>
          </Form>
        </Styles.Content>
      </Styles.Main>
    </Styles.Container>
  );
}

export default Homepage;
