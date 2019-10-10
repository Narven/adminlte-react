import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import './App.css';
import * as dotenv from 'dotenv'
import DashboardPage from '../widgets/Dashboard';
import SecureRoute from '../widgets/SecureRoute';
import StandardLayout from '../widgets/StandardLayout';

dotenv.config()

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SecureRoute exact path='/' component={DashboardPage} layout={StandardLayout} />
    </BrowserRouter>
  );
}

export default App;
