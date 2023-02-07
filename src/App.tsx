import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';


export default class App extends Component {
  render(): React.ReactNode {
    return <div>
      <Main></Main>
      <Main></Main>
      <Footer></Footer>
    </div>
  }
};
