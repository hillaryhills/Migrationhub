import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AUTH_TOKEN } from '../../constants';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  console.log("test",Component, rest, user)
  return (
    <Route {...rest} render={
      props => {
        if (localStorage.getItem("auth-token")) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/unauthorized',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;