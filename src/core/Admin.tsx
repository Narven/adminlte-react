import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import * as dotenv from 'dotenv'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage';
import SecureRoute from './components/widgets/SecureRoute';
import StandardLayout from './components/widgets/StandardLayout';

dotenv.config()

const Admin: React.FC = () => {
  return (
    <BrowserRouter>
      <SecureRoute exact path='/' component={DashboardPage} layout={StandardLayout} />
      <Route exact path='/login' component={LoginPage} />
    </BrowserRouter>
  );
}

export default Admin;
