import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const GoogleApiWrapper = require('../src/index').GoogleApiWrapper;

const Container = ({ routes, google, loaded }) => {
  const location = useLocation();
  
  // Find current route definition based on pathname
  const currentRoute = routes.find(route => route.path === location.pathname) || routes[0];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <ul>
            {routes.map(route => (
              <Link key={route.path} to={route.path}>
                <li className={location.pathname === route.path ? styles.active : ''}>
                  {route.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>{currentRoute.name} Example</h1>
            <h2>
              <a href="https://github.com/fullstackreact/google-maps-react/blob/master/README.md">
                Readme
              </a>
            </h2>
          </div>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.name}
                path={route.path}
                element={
                  <div>
                    <route.component
                      google={google}
                      loaded={loaded}
                      route={route}
                      routes={routes}
                    />
                  </div>
                }
              />
            ))}
            <Route path="*" element={<Navigate to="/basic" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const Loading = () => <div>Fancy loading container</div>;

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__,
  libraries: ['places', 'visualization'],
  LoadingContainer: Loading
})(Container);