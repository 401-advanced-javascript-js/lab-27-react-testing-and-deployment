import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Counter from './components/counter/counter';

import('./app.scss');

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
