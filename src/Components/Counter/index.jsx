import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styles from '../../styles.module.css';
import { MDBBtn, MDBIcon } from "mdbreact";

class Counter extends Component {
  
  render() {
    return (
      <div className='d-flex justify-content-center' class='height:10px'>
        <button onClick={this.props.decrementQuantity} type="button" class="btn  p-1">
          <MDBIcon icon="minus" />
        </button>
        {/* <a href="#" className={styles.decrement} onClick={this.decrement}>
          –
        </a> */}
        <input
          className="w-25 d-inline-block text-center"
          value={this.props.quantity}
        />
         <button onClick={this.props.incrementQuantity} type="button" class="btn  p-1">       
         <MDBIcon icon="plus" />        </button>
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
