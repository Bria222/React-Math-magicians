import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display-result">0</div>
        <div className="row-one grid">
          <button type="button" className="col">Ac</button>
          <button type="button" className="col">+/-</button>
          <button type="button" className="col">%</button>
          <button type="button" className="col">/</button>
        </div>
        <div className="row-two grid">
          <button type="button" className="col">7</button>
          <button type="button" className="col">8</button>
          <button type="button" className="col">9</button>
          <button type="button" className="col">*</button>
        </div>
        <div className="row-three grid">
          <button type="button" className="col">4</button>
          <button type="button" className="col">5</button>
          <button type="button" className="col">6</button>
          <button type="button" className="col">-</button>
        </div>
        <div className="row-four grid">
          <button type="button" className="col">1</button>
          <button type="button" className="col">2</button>
          <button type="button" className="col">3</button>
          <button type="button" className="col">+</button>
        </div>
        <div className="row-five grid">
          <div type="button" className="col div-col" />
          <button type="button" className="col">0</button>
          <button type="button" className="col">.</button>
          <button type="button" className="col">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
