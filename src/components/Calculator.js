/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="input">0</div>
        <div className="row">
          <div>AC</div>
          <div>+/-</div>
          <div>%</div>
          <div className="color">÷</div>
        </div>
        <div className="row">
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div className="color">×</div>
        </div>
        <div className="row">
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div className="color">-</div>
        </div>
        <div className="row">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div className="color">+</div>
        </div>
        <div className="first-row">
          <div>0</div>
          <div>.</div>
          <div className="color">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
