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
      <div className='d-flex justify-content-center' class='height:10px'>
        <button onClick={this.decrement} type="button" class="btn btn-warning px-3">
          <MDBIcon far icon="minus-square" />
        </button>
        {/* <a href="#" className={styles.decrement} onClick={this.decrement}>
          –
        </a> */}
        <input
          className="w-25 d-inline-block text-center"
          value={this.state.value}
        />
         <button onClick={this.increment} type="button" class="btn btn-warning px-3">       
        <MDBIcon far icon="plus-square" />
        </button>
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
