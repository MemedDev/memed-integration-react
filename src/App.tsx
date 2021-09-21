import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { UserState } from './store/user/types';
import { AppState } from './store';

import { authenticateToken, finishRendering } from './store/user/actions';

import Routes from './routes';

import { FlexContainer, LoaderSpinner } from './components/ui';

function App() {
  const dispatch = useDispatch();
  const { rendering, user } = useSelector<AppState, UserState>(state => state.userState);

  useEffect(() => {
    const userToken = localStorage.getItem('@Memed:user-token');

    if (userToken && userToken !== user?.token) dispatch(authenticateToken(userToken));
    else dispatch(finishRendering());
  }, [user, dispatch]);

  if (rendering) {
    return (
      <FlexContainer height="100vh">
        <LoaderSpinner size={40} />
      </FlexContainer>
    );
  }

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
