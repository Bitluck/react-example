import React from 'react';
import '../styles/components/App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
