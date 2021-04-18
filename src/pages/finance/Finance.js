import React, { Component } from "react";
import FinanceInfo from "../../components/Finance/FinanceInfo";
import Calculator from "../../components/Finance/Calculator";
import "./Finance.css";

class Finance extends Component {
    render() {
        return (
            <div>
                <FinanceInfo />
                <Calculator />
            </div>
        )
    }
}
export default Finance