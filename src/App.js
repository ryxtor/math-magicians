import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="math-magicians/" element={<Home />} />
        <Route path="math-magicians/calculator" element={<Calculator />} />
        <Route path="math-magicians/quote" element={<Quote />} />
      </Routes>
    );
  }
}
