import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute } from 'react-router-dom';

interface RouteWrapperProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

function Route({ component: Component, ...rest }: RouteWrapperProps) {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
}

export default Route;
