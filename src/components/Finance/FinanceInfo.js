import React, { Component } from "react";

class FinanceInfo extends Component {
    render() {
        return (
            <div>
                <h1 className="calc-title">WHY FINANCE WITH US?</h1>
                <p className="info-text">
                    Our goal is to get you into the car of your dreams as fast as possible, while minimizing stress.
                    Unless you have the money to pay for the car in full, you will need to apply for a loan.
                    While you could get a loan from a bank or a credit union, you could also finance through us
                    for simple payment plans with the lowest rates.

                </p>

                <h1 className="calc-title">BENEFITS OF FINANCING WITH US</h1>
                <p className="info-text">
                    Benefits of financing through us include:
                </p>
                <ul className="list">
                    <li>Lowest interest rates guaranteed.</li>
                    <li>No hidden fees.</li>
                    <li>Easy to understand payment plans.</li>
                    <li>Very low amount of stress for you.</li>
                </ul>

                <h1 className="calc-title">WHERE TO BEGIN</h1>
                <p className="info-text">
                    You can finance through us by following these simple steps:
                </p>
                <ol className="list">
                    <li>Use the Auto Loan Estimator tool below to get an idea of our finance costs.</li>
                    <li>Find the car for you and add it to your cart.</li>
                    <li>Select the financing option at checkout and enter the required fields.</li>
                    <li>Pay the down payment and enjoy your new car.</li>
                </ol>
            </div>
        )
    }
}
export default FinanceInfo;