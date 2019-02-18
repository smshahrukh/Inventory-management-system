import React, { Component } from 'react';
import Header from './components/Header.js';
import Categories from './components/Categories.js';
import { Container } from 'reactstrap';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="Beauty Fair.PK" />
          <Container>
            <Categories />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
