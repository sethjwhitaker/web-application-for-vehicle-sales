import React, { Component } from "react";
import PropTypes from "prop-types";
import Display from "./Display";

class Calculate extends Component {
  
  calculateTotalPayment = () => {
    
    const { amount, downPayment, interest } = this.props;
    
    const interestDecimal = (interest / 100) + 1;
    const totalLoan = interestDecimal * (amount - downPayment);
    
    return <h1>${Math.round(totalLoan)}</h1>;
  };
  
  calculateMonthlyPayment = () => {
    
    const { amount, term, downPayment, interest } = this.props;

    const interestDecimal = (interest / 100) + 1;
    const totalLoan = interestDecimal * (amount - downPayment);
    const monthlyPayment = totalLoan / term;

    return <h1>${Math.round(monthlyPayment)}</h1>;
  };
  
  interestRate = () => {
    return <h1>{this.props.interest}%</h1>;
  };
  
  render() {
    return (
      <div className="display">
        
        <br />
        
        <Display
        func={this.calculateTotalPayment()}
        text=" Total Loan Payment"
        />
        
        <br /><br />
        
        <Display
        func={this.calculateMonthlyPayment()}
        text=" Monthly Loan Payment"
        />
        
        <br /><br />
        
        <Display
        func={this.interestRate()} 
        text=" Interest Rate" 
        />
      </div>
    );
  }
}

Calculate.propTypes = {
  term: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  interest: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired
};
  
export default Calculate;