import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styles from '../../styles.module.css';
import { MDBBtn, MDBIcon } from "mdbreact";

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = { value: this.props.Quantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => {
        return {value: state.value + 1};
      });
  }

  decrement() {
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
        this.setState((state) => {
            return {value: state.value - 1};
          });
    }
  }

  render() {
    return (
      <div className={styles.stepper_input}>
        <MDBBtn onClick={this.decrement} stag="a" size="lg" floating>
        <MDBIcon far icon="minus-square" />
        </MDBBtn>
        {/* <a href="#" className={styles.decrement} onClick={this.decrement}>
          –
        </a> */}
        <input
          className={styles.quantity}
          value={this.state.value}
        />
        <MDBBtn onClick={this.increment} tag="a" size="lg" floating>
        <MDBIcon far icon="plus-square" />
        </MDBBtn>
        {/* <a href="#" className={styles.increment} onClick={this.increment}>
          +
        </a> */}
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
