import React from 'react';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import { RestrictedAccess } from './RestrictedAccess';

export  function AuthenticatedRoutes({ children }) {
  const jwtToken = Cookies.get('jwtToken');
  const location = useLocation();

  return (
    jwtToken ? children : <RestrictedAccess redirectTo={location.pathname} />
  );
}
export function AuthorizedRoutes({ children, userRole }) {
  const location = useLocation();
  const roles = JSON.parse(localStorage.getItem('roles'));

  return (
    roles?.includes(userRole) ? children : <RestrictedAccess unAuthorized redirectTo={location.pathname} />
  );
}