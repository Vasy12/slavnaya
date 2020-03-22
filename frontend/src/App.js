import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route }     from 'react-router-dom';
import './App.css';
const SignUpPage = lazy( () => import('./pages/SignUpPage') );
const SignInPage = lazy( () => import('./pages/SignInPage') );
const HomePage = lazy( () => import('./pages/HomePage') );
const DashboardPage = lazy( () => import('./pages/DashboardPage') );
const AdminPage = lazy( () => import('./pages/AdminPage') );

function App () {
  return (
      <Router>
        <Suspense fallback={<div className='loader'>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
            <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
            <Route path={'/dashboard'} component={DashboardPage}/>
            <Route path={'/admin'} component={AdminPage}/>
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
