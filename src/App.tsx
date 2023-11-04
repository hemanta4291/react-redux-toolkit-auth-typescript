import { BrowserRouter, Navigate, Route, Routes, useMatch } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthLayout from './layout/AuthLayout';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import useAuthCheck from './hooks/useAuthCheck';
import PubicRoute from './layout/PublicRoute';
import PrivateRoute from './layout/PrivateRoute';
import Salse from './components/Sales';
import Sales from './components/Sales';
import NotFound from './components/NotFound';

function App() {
  const auth = useAuthCheck()

  if(!auth)return <div>checking initial.........</div>
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
        < Route path="/" element={<Navigate to="/sign-in" replace />} />
            <Route path='/sign-in'  element={<PubicRoute><SignIn/></PubicRoute>} />
            <Route path='/sign-up' element={<PubicRoute><SignUp/></PubicRoute>} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path='' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path='users' element={<PrivateRoute><Users/></PrivateRoute>} />
            <Route path='sales' element={<PrivateRoute><Sales/></PrivateRoute>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
