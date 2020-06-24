import React, {Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Content from './Content';
import { HashRouter } from 'react-router-dom';

export default class App extends Component {
  render(){
    return(
      <HashRouter>
        <Header />
        <Menu />
        <Content />
        <Footer />
      </HashRouter>
    );
  }
}