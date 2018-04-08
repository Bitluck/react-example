import React from 'react';
import '../styles/components/App.css';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
