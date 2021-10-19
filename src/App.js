import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './pages/Register/Register';
import PrivetRoute from './pages/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/service'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivetRoute path='/contact'>
              <Contact></Contact>
            </PrivetRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
