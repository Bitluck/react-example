import React from 'react';
import { Provider } from 'react-redux';
import '../styles/components/App.css';
import LoginForm from './LoginForm';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default App;
