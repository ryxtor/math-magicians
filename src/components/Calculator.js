import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="result">0</div>
        <div className="btn btn-ac">AC</div>
        <div className="btn btn-plus-minus">+/-</div>
        <div className="btn btn-percent">%</div>
        <div className="btn btn-divide orange-color">/</div>
        <div className="btn btn-7">7</div>
        <div className="btn btn-8">8</div>
        <div className="btn btn-9">9</div>
        <div className="btn btn-multiply orange-color">&times;</div>
        <div className="btn btn-4">4</div>
        <div className="btn btn-5">5</div>
        <div className="btn btn-6">6</div>
        <div className="btn btn-minus orange-color">-</div>
        <div className="btn btn-1">1</div>
        <div className="btn btn-2">2</div>
        <div className="btn btn-3">3</div>
        <div className="btn btn-add orange-color">+</div>
        <div className="btn btn-0">0</div>
        <div className="btn btn-decimal">.</div>
        <div className="btn btn-equal orange-color">=</div>
      </div>
    );
  }
}
