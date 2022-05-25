import React from 'react';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(e) {
    this.setState((state) => calculate(state, e.target.id));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="display-result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="row-one grid">
          <button type="button" onClick={this.handleClickEvent} id="AC" className="col">Ac</button>
          <button type="button" onClick={this.handleClickEvent} id="+/-" className="col">+/-</button>
          <button type="button" onClick={this.handleClickEvent} id="%" className="col">%</button>
          <button type="button" onClick={this.handleClickEvent} id="÷" className="col">÷</button>
        </div>
        <div className="row-two grid">
          <button type="button" onClick={this.handleClickEvent} id="7" className="col">7</button>
          <button type="button" onClick={this.handleClickEvent} id="8" className="col">8</button>
          <button type="button" onClick={this.handleClickEvent} id="9" className="col">9</button>
          <button type="button" onClick={this.handleClickEvent} id="*" className="col">*</button>
        </div>
        <div className="row-three grid">
          <button type="button" onClick={this.handleClickEvent} id="4" className="col">4</button>
          <button type="button" onClick={this.handleClickEvent} id="5" className="col">5</button>
          <button type="button" onClick={this.handleClickEvent} id="6" className="col">6</button>
          <button type="button" onClick={this.handleClickEvent} id="-" className="col">-</button>
        </div>
        <div className="row-four grid">
          <button type="button" onClick={this.handleClickEvent} id="1" className="col">1</button>
          <button type="button" onClick={this.handleClickEvent} id="2" className="col">2</button>
          <button type="button" onClick={this.handleClickEvent} id="3" className="col">3</button>
          <button type="button" onClick={this.handleClickEvent} id="+" className="col">+</button>
        </div>
        <div className="row-five grid">
          <div type="button" className="col div-col" />
          <button type="button" onClick={this.handleClickEvent} id="0" className="col">0</button>
          <button type="button" onClick={this.handleClickEvent} id="." className="col">.</button>
          <button type="button" onClick={this.handleClickEvent} id="=" className="col">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
